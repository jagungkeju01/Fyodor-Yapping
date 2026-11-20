/* Interaksi utama Dapurara: pencarian, kategori, favorit, detail, dan tambah resep lokal. */
(() => {
  const $ = (selector) => document.querySelector(selector);
  const grid = $("#recipeGrid");
  const categoryList = $("#categoryList");
  const searchInput = $("#searchInput");
  const resultNote = $("#resultNote");
  const emptyState = $("#emptyState");
  const mainApp = $("#app");
  const detailView = $("#detailView");
  const recipeDialog = $("#recipeDialog");
  const newRecipeForm = $("#newRecipeForm");
  const STORAGE_FAVORITES = "dapurara-favorites";
  const STORAGE_CUSTOM = "dapurara-custom-recipes";

  let activeCategory = "";
  let searchTerm = "";
  let favoritesOnly = false;
  let sortMode = "featured";
  let toastTimer;

  function readStorage(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }

  function getCustomRecipes() {
    return readStorage(STORAGE_CUSTOM, []);
  }

  function getRecipes() {
    return [...getCustomRecipes(), ...RECIPES];
  }

  function getFavorites() {
    return readStorage(STORAGE_FAVORITES, []);
  }

  function saveFavorites(ids) {
    localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(ids));
    updateFavoriteCount();
  }

  function updateFavoriteCount() {
    $("#favoriteCount").textContent = getFavorites().length;
    $("#showFavorites").classList.toggle("is-active", favoritesOnly);
  }

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
  }

  function safeImage(url) {
    const fallback = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80";
    try {
      const parsed = new URL(url, window.location.href);
      return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : fallback;
    } catch {
      return fallback;
    }
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function renderCategories() {
    categoryList.innerHTML = CATEGORIES.map((category) => {
      const count = getRecipes().filter((recipe) => recipe.category === category.name).length;
      return `<button class="category-item ${activeCategory === category.name ? "selected" : ""}" data-category="${escapeHTML(category.name)}">
        <span class="category-emoji">${category.icon}</span>
        <strong>${escapeHTML(category.name)}</strong><small>${count} resep</small>
      </button>`;
    }).join("");
  }

  function getVisibleRecipes() {
    let recipes = getRecipes();
    if (activeCategory) recipes = recipes.filter((recipe) => recipe.category === activeCategory);
    if (searchTerm) {
      const term = searchTerm.toLocaleLowerCase("id");
      recipes = recipes.filter((recipe) =>
        `${recipe.name} ${recipe.category} ${recipe.author} ${recipe.description}`.toLocaleLowerCase("id").includes(term)
      );
    }
    if (favoritesOnly) {
      const saved = getFavorites();
      recipes = recipes.filter((recipe) => saved.includes(recipe.id));
    }
    if (sortMode === "quick") recipes.sort((a, b) => a.time - b.time);
    if (sortMode === "az") recipes.sort((a, b) => a.name.localeCompare(b.name, "id"));
    return recipes;
  }

  function recipeCard(recipe) {
    const saved = getFavorites().includes(recipe.id);
    return `<article class="recipe-card">
      <div class="recipe-photo-wrap">
        <a href="#resep/${encodeURIComponent(recipe.id)}" aria-label="Lihat resep ${escapeHTML(recipe.name)}">
          <img class="recipe-photo" src="${escapeHTML(safeImage(recipe.image))}" alt="${escapeHTML(recipe.name)}" loading="lazy">
        </a>
        <span class="recipe-category">${escapeHTML(recipe.category)}</span>
        <button class="favorite-button ${saved ? "saved" : ""}" data-favorite="${escapeHTML(recipe.id)}" aria-label="${saved ? "Hapus dari" : "Simpan ke"} resep tersimpan" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button>
      </div>
      <div class="recipe-card-body">
        <h3><a href="#resep/${encodeURIComponent(recipe.id)}">${escapeHTML(recipe.name)}</a></h3>
        <p class="recipe-author">Oleh ${escapeHTML(recipe.author || "Dapurara")}</p>
        <div class="recipe-meta"><span>◷ ${Number(recipe.time) || 30} menit</span><a class="open-recipe" href="#resep/${encodeURIComponent(recipe.id)}">Lihat resep →</a></div>
      </div>
    </article>`;
  }

  function renderRecipes() {
    const recipes = getVisibleRecipes();
    grid.innerHTML = recipes.map(recipeCard).join("");
    grid.classList.toggle("hidden", recipes.length === 0);
    emptyState.classList.toggle("hidden", recipes.length !== 0);
    resultNote.textContent = favoritesOnly
      ? `${recipes.length} resep tersimpan`
      : `${recipes.length} resep${activeCategory ? ` dalam kategori ${activeCategory}` : ""}${searchTerm ? ` untuk “${searchTerm}”` : ""}`;
    $("#recipeSectionTitle").textContent = favoritesOnly ? "Resep tersimpan" : activeCategory || (searchTerm ? "Hasil pencarian" : "Resep pilihan hari ini");
    renderCategories();
    updateFavoriteCount();
  }

  function toggleFavorite(id) {
    const favorites = getFavorites();
    const exists = favorites.includes(id);
    const updated = exists ? favorites.filter((item) => item !== id) : [...favorites, id];
    saveFavorites(updated);
    renderRecipes();
    if (!exists) showToast("Resep disimpan ke favorit.");
    else showToast("Resep dihapus dari favorit.");
    if (window.location.hash.startsWith("#resep/")) renderRoute();
  }

  function findRecipe(id) {
    return getRecipes().find((recipe) => recipe.id === id);
  }

  function renderDetail(id) {
    const recipe = findRecipe(id);
    if (!recipe) {
      detailView.innerHTML = `<a class="back-link" href="#jelajahi">← Kembali ke resep</a><div class="empty-state"><h3>Resep tidak ditemukan</h3><p>Resep mungkin sudah dihapus dari penyimpanan browser.</p></div>`;
      return;
    }
    const saved = getFavorites().includes(recipe.id);
    detailView.innerHTML = `
      <a class="back-link" href="#jelajahi">← Kembali ke semua resep</a>
      <div class="detail-top">
        <img class="detail-image" src="${escapeHTML(safeImage(recipe.image))}" alt="${escapeHTML(recipe.name)}">
        <div class="detail-info">
          <span class="eyebrow">${escapeHTML(recipe.category.toUpperCase())} · RESEP RUMAHAN</span>
          <h1>${escapeHTML(recipe.name)}</h1>
          <p class="detail-description">${escapeHTML(recipe.description)}</p>
          <p class="recipe-author">Dibagikan oleh <strong>${escapeHTML(recipe.author || "Dapurara")}</strong></p>
          <div class="detail-meta">
            <div><small>Waktu memasak</small><strong>◷ ${Number(recipe.time) || 30} menit</strong></div>
            <div><small>Porsi</small><strong>♧ ${Number(recipe.servings) || 2} orang</strong></div>
          </div>
          <div class="detail-actions">
            <button class="button button-primary" data-favorite="${escapeHTML(recipe.id)}">${saved ? "♥ Resep tersimpan" : "♡ Simpan resep"}</button>
            <button class="button button-outline" id="shareRecipe">↗ Bagikan resep</button>
          </div>
        </div>
      </div>
      <div class="detail-columns">
        <section><h2>Bahan-bahan</h2><ul class="ingredient-list">${(recipe.ingredients || []).map((item) => `<li><input type="checkbox" aria-label="Tandai bahan"><span>${escapeHTML(item)}</span></li>`).join("")}</ul></section>
        <section><h2>Langkah memasak</h2><ol class="step-list">${(recipe.steps || []).map((step, index) => `<li><span class="step-number">${index + 1}</span><span>${escapeHTML(step)}</span></li>`).join("")}</ol></section>
      </div>`;
    $("#shareRecipe").addEventListener("click", async () => {
      const shareData = { title: recipe.name, text: recipe.description, url: window.location.href };
      try {
        if (navigator.share) await navigator.share(shareData);
        else if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          showToast("Tautan resep disalin.");
        } else {
          showToast("Salin tautan dari bilah alamat browser.");
        }
      } catch (error) {
        if (error.name !== "AbortError") showToast("Tautan belum dapat dibagikan dari browser ini.");
      }
    });
  }

  function renderRoute() {
    const match = window.location.hash.match(/^#resep\/(.+)$/);
    const isDetail = Boolean(match);
    mainApp.classList.toggle("hidden", isDetail);
    detailView.classList.toggle("hidden", !isDetail);
    if (isDetail) {
      let id = match[1];
      try { id = decodeURIComponent(id); } catch {}
      renderDetail(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (window.location.hash === "#beranda" || window.location.hash === "") {
        document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#beranda"));
      }
    }
  }

  function runSearch(value) {
    searchTerm = value.trim();
    favoritesOnly = false;
    activeCategory = "";
    renderRecipes();
    if (window.location.hash !== "#jelajahi") window.location.hash = "jelajahi";
    $("#jelajahi").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  $("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch(searchInput.value);
  });

  document.querySelectorAll("[data-search]").forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = button.dataset.search;
      runSearch(button.dataset.search);
    });
  });

  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = activeCategory === button.dataset.category ? "" : button.dataset.category;
    favoritesOnly = false;
    searchTerm = "";
    searchInput.value = "";
    renderRecipes();
    $("#jelajahi").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
      event.preventDefault();
      toggleFavorite(favoriteButton.dataset.favorite);
    }
  });

  $("#sortSelect").addEventListener("change", (event) => {
    sortMode = event.target.value;
    renderRecipes();
  });

  $("#showFavorites").addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    activeCategory = "";
    searchTerm = "";
    searchInput.value = "";
    renderRecipes();
    $("#jelajahi").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#resetFilters").addEventListener("click", () => {
    activeCategory = "";
    searchTerm = "";
    favoritesOnly = false;
    searchInput.value = "";
    renderRecipes();
  });

  $("#openRecipeForm").addEventListener("click", () => {
    recipeDialog.showModal();
    $("#navLinks").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  });
  $("#closeRecipeForm").addEventListener("click", () => recipeDialog.close());
  recipeDialog.addEventListener("click", (event) => {
    if (event.target === recipeDialog) recipeDialog.close();
  });

  newRecipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newRecipeForm);
    const name = String(formData.get("name")).trim();
    const slug = name.toLocaleLowerCase("id").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const customRecipes = getCustomRecipes();
    const id = `${slug || "resep"}-${Date.now().toString(36)}`;
    const defaultImage = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80";
    const recipe = {
      id, name, category: String(formData.get("category")),
      author: "Resep Saya", time: Math.max(1, Number(formData.get("time")) || 30), servings: 2,
      image: String(formData.get("image")).trim() || defaultImage,
      description: String(formData.get("description")).trim(),
      ingredients: String(formData.get("ingredients")).split("\n").map((item) => item.trim()).filter(Boolean),
      steps: String(formData.get("steps")).split("\n").map((item) => item.trim()).filter(Boolean)
    };
    customRecipes.unshift(recipe);
    try {
      localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(customRecipes));
    } catch {
      showToast("Penyimpanan penuh. Hapus data situs atau gunakan foto URL yang lebih ringan.");
      return;
    }
    newRecipeForm.reset();
    recipeDialog.close();
    activeCategory = "";
    searchTerm = "";
    favoritesOnly = false;
    renderRecipes();
    window.location.hash = "jelajahi";
    $("#jelajahi").scrollIntoView({ behavior: "smooth" });
    showToast("Resep baru berhasil disimpan di browser ini.");
  });

  $("#menuToggle").addEventListener("click", () => {
    const isOpen = $("#navLinks").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      $("#navLinks").classList.remove("open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.toggle("active", item === link));
    });
  });

  window.addEventListener("hashchange", renderRoute);
  $("#year").textContent = new Date().getFullYear();
  renderRecipes();
  renderRoute();
})();
