/* Data resep contoh. Tambahkan resep baru ke array ini bila diperlukan. */
const RECIPES = [
  {
    id: "ayam-kecap", name: "Ayam Kecap Bumbu Rumahan", category: "Ayam", author: "Dapur Nisa", time: 35, servings: 3,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    description: "Ayam kecap dengan bumbu sederhana, rasa gurih-manis yang meresap sampai ke dalam. Cocok untuk menu makan siang bersama keluarga.",
    ingredients: ["500 g ayam, potong sesuai selera", "5 sdm kecap manis", "4 siung bawang merah, iris", "3 siung bawang putih, cincang", "1 ruas jahe, geprek", "200 ml air", "Garam dan merica secukupnya"],
    steps: ["Cuci ayam hingga bersih, lalu tiriskan.", "Tumis bawang merah, bawang putih, dan jahe sampai harum.", "Masukkan ayam, aduk sampai berubah warna.", "Tambahkan kecap manis, air, garam, dan merica.", "Masak dengan api kecil selama 20–25 menit hingga bumbu meresap. Sajikan hangat."]
  },
  {
    id: "nasi-goreng", name: "Nasi Goreng Kampung", category: "Masakan Rumahan", author: "Raka Pratama", time: 20, servings: 2,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    description: "Menu praktis untuk memanfaatkan nasi sisa semalam. Rasanya gurih dengan aroma bawang dan kecap yang khas.",
    ingredients: ["2 piring nasi putih dingin", "2 butir telur", "3 siung bawang putih", "4 siung bawang merah", "1 batang daun bawang", "2 sdm kecap manis", "Garam dan minyak secukupnya"],
    steps: ["Haluskan bawang merah dan bawang putih.", "Panaskan sedikit minyak, tumis bumbu hingga harum.", "Masukkan telur, orak-arik sampai matang.", "Tambahkan nasi, kecap, garam, dan daun bawang.", "Aduk dengan api besar sampai tercampur rata, lalu sajikan."]
  },
  {
    id: "sayur-asem", name: "Sayur Asem Segar", category: "Sayuran", author: "Mbak Rini", time: 30, servings: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    description: "Sayur berkuah segar dengan rasa asam yang ringan. Nikmat disantap bersama nasi hangat dan lauk sederhana.",
    ingredients: ["1 buah jagung, potong-potong", "100 g kacang panjang", "1 buah labu siam", "1 genggam daun melinjo", "2 sdm air asam jawa", "2 lembar daun salam", "Garam dan gula secukupnya"],
    steps: ["Didihkan air bersama daun salam dan bumbu halus.", "Masukkan jagung, masak hingga mulai empuk.", "Tambahkan labu siam dan kacang panjang.", "Masukkan daun melinjo, air asam jawa, garam, dan gula.", "Masak sampai semua sayuran matang, lalu koreksi rasa."]
  },
  {
    id: "pisang-goreng", name: "Pisang Goreng Renyah", category: "Camilan", author: "Dapur Lala", time: 20, servings: 3,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    description: "Camilan sederhana dengan lapisan tepung yang renyah dan bagian dalam pisang yang lembut. Pas untuk teman minum teh.",
    ingredients: ["6 buah pisang kepok", "100 g tepung terigu", "2 sdm tepung beras", "1 sdm gula", "Sejumput garam", "120 ml air", "Minyak untuk menggoreng"],
    steps: ["Campur tepung terigu, tepung beras, gula, dan garam.", "Tuang air sedikit demi sedikit sambil diaduk hingga menjadi adonan.", "Kupas pisang dan belah sesuai selera.", "Celupkan pisang ke adonan, lalu goreng dalam minyak panas.", "Balik sesekali dan angkat setelah berwarna keemasan."]
  },
  {
    id: "martabak-manis", name: "Martabak Manis Mini", category: "Kue", author: "Nadya Putri", time: 45, servings: 4,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",
    description: "Martabak mini rumahan yang lembut dengan topping favorit. Ukurannya pas untuk camilan sore atau bekal.",
    ingredients: ["150 g tepung terigu", "2 sdm gula pasir", "1 butir telur", "180 ml susu cair", "1/2 sdt baking powder", "1/4 sdt soda kue", "Margarin dan topping sesuai selera"],
    steps: ["Aduk tepung, gula, telur, dan susu sampai licin.", "Diamkan adonan selama 20 menit.", "Tambahkan baking powder dan soda kue, aduk rata.", "Tuang adonan ke cetakan kecil yang sudah dipanaskan.", "Saat muncul pori-pori, tutup hingga matang. Olesi margarin dan beri topping."]
  },
  {
    id: "es-teh-lemon", name: "Es Teh Lemon Madu", category: "Minuman", author: "Ayu Kitchen", time: 10, servings: 2,
    image: "https://images.unsplash.com/photo-1513558161293-c359765e4b7a?auto=format&fit=crop&w=900&q=85",
    description: "Minuman segar dengan perpaduan teh, lemon, dan madu. Mudah dibuat untuk menemani cuaca panas.",
    ingredients: ["2 kantong teh hitam", "400 ml air panas", "1 buah lemon", "2 sdm madu", "Es batu secukupnya"],
    steps: ["Seduh teh dengan air panas selama 3–5 menit.", "Angkat kantong teh dan biarkan teh sedikit dingin.", "Tambahkan madu dan perasan setengah buah lemon.", "Tuang ke gelas berisi es batu.", "Iris sisa lemon, tambahkan sebagai pelengkap, lalu sajikan."]
  },
  {
    id: "soto-ayam", name: "Soto Ayam Kuning", category: "Ayam", author: "Dapur Bu Tini", time: 50, servings: 4,
    image: "https://images.unsplash.com/photo-1547592180-86f7f4f6f9f3?auto=format&fit=crop&w=900&q=85",
    description: "Soto ayam berkuah kuning hangat dengan aroma rempah. Lengkapi dengan nasi, seledri, dan perasan jeruk nipis.",
    ingredients: ["400 g ayam", "1,2 liter air", "4 siung bawang putih", "6 siung bawang merah", "2 cm kunyit", "2 lembar daun salam", "Serai, garam, dan merica secukupnya"],
    steps: ["Rebus ayam hingga matang, simpan kaldunya.", "Haluskan bawang merah, bawang putih, dan kunyit.", "Tumis bumbu bersama serai dan daun salam sampai harum.", "Masukkan bumbu ke kaldu, lalu masak kembali.", "Suwir ayam dan sajikan bersama kuah serta pelengkap."]
  },
  {
    id: "capcay", name: "Capcay Sayur Sederhana", category: "Sayuran", author: "Kak Dini", time: 25, servings: 3,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description: "Olahan sayuran warna-warni yang praktis. Bisa disesuaikan dengan sayuran yang tersedia di kulkas.",
    ingredients: ["1 wortel, iris", "100 g kembang kol", "1 genggam sawi", "5 buah bakso, iris (opsional)", "2 siung bawang putih", "250 ml air", "Garam, merica, dan sedikit saus tiram"],
    steps: ["Cuci dan potong semua sayuran.", "Tumis bawang putih sampai harum.", "Masukkan wortel dan kembang kol, aduk sebentar.", "Tuang air, tambahkan bakso dan bumbu.", "Masukkan sawi terakhir, masak hingga sayuran matang tetapi tetap renyah."]
  },
  {
    id: "telur-balado", name: "Telur Balado Praktis", category: "Masakan Rumahan", author: "Dapur Sari", time: 25, servings: 3,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    description: "Telur rebus dengan sambal merah sederhana. Lauk ekonomis yang cocok dipadukan dengan nasi hangat.",
    ingredients: ["5 butir telur", "6 cabai merah (sesuaikan)", "4 siung bawang merah", "2 siung bawang putih", "1 buah tomat", "Garam dan gula secukupnya", "Minyak secukupnya"],
    steps: ["Rebus telur hingga matang, kupas, lalu sisihkan.", "Haluskan cabai, bawang merah, bawang putih, dan tomat.", "Tumis bumbu halus hingga matang dan tidak langu.", "Bumbui dengan garam dan sedikit gula.", "Masukkan telur, aduk perlahan sampai terbalut sambal."]
  },
  {
    id: "puding-cokelat", name: "Puding Cokelat Lembut", category: "Kue", author: "Nana Bake", time: 20, servings: 5,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    description: "Puding cokelat dengan tekstur lembut dan rasa manis yang pas. Dinginkan sebelum disajikan agar lebih nikmat.",
    ingredients: ["1 bungkus agar-agar cokelat", "600 ml susu cair", "3 sdm gula pasir", "2 sdm bubuk kakao", "Sejumput garam"],
    steps: ["Campurkan agar-agar, gula, kakao, dan garam di panci.", "Tuang susu sedikit demi sedikit sambil diaduk.", "Masak hingga mendidih sambil terus diaduk.", "Tuang ke cetakan dan biarkan uap panas berkurang.", "Simpan di kulkas hingga set, lalu sajikan."]
  },
  {
    id: "tempe-goreng", name: "Tempe Goreng Bumbu Bawang", category: "Camilan", author: "Masak Bareng Ema", time: 15, servings: 3,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=85",
    description: "Tempe goreng gurih dengan bumbu bawang yang meresap. Bisa menjadi lauk sederhana atau camilan sore.",
    ingredients: ["1 papan tempe", "3 siung bawang putih", "1 sdt ketumbar", "1/2 sdt garam", "100 ml air", "Minyak untuk menggoreng"],
    steps: ["Iris tempe dengan ketebalan sedang.", "Haluskan bawang putih, ketumbar, dan garam.", "Campurkan bumbu dengan air, lalu rendam tempe selama 5 menit.", "Panaskan minyak dengan api sedang.", "Goreng tempe sampai keemasan dan tiriskan."]
  },
  {
    id: "jus-mangga", name: "Jus Mangga Segar", category: "Minuman", author: "Dapur Ceria", time: 8, servings: 2,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=85",
    description: "Jus mangga sederhana dengan rasa buah yang segar. Atur tingkat manis sesuai kematangan mangga.",
    ingredients: ["2 buah mangga matang", "250 ml air dingin atau susu", "1 sdm madu (opsional)", "Es batu secukupnya"],
    steps: ["Kupas mangga dan potong daging buahnya.", "Masukkan mangga, air atau susu, dan madu ke blender.", "Proses sampai halus.", "Tuang ke gelas dan tambahkan es batu bila suka.", "Sajikan segera selagi segar."]
  }
];

const CATEGORIES = [
  { name: "Masakan Rumahan", icon: "🍲", description: "Menu sehari-hari" },
  { name: "Ayam", icon: "🍗", description: "Olahan ayam" },
  { name: "Sayuran", icon: "🥬", description: "Segar & bergizi" },
  { name: "Kue", icon: "🍰", description: "Manis dan lembut" },
  { name: "Camilan", icon: "🥟", description: "Teman santai" },
  { name: "Minuman", icon: "🥤", description: "Segar melepas dahaga" }
];
