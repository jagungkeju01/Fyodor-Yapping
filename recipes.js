/* Data resep TINGGSFOOD. Foto memakai file lokal di folder assets/. */
const RECIPES = [
  {
    id: "bubur-ayam", name: "Bubur Ayam Gurih", category: "Ayam", author: "TINGGSFOOD", time: 35, servings: 2,
    image: "assets/bubur-ayam.jpg",
    description: "Bubur nasi hangat dengan suwiran ayam berbumbu, bawang goreng, kacang, dan seledri. Cocok untuk sarapan yang mengenyangkan.",
    ingredients: ["150 g beras, cuci bersih", "1 liter kaldu ayam atau air", "150 g ayam rebus, suwir", "2 siung bawang putih, haluskan", "1 batang daun bawang, iris", "Bawang goreng dan seledri secukupnya", "Garam dan merica secukupnya"],
    steps: ["Rebus beras bersama kaldu dengan api kecil.", "Aduk berkala sampai beras pecah dan teksturnya menjadi bubur; tambahkan air bila terlalu kental.", "Tumis bawang putih sampai harum, lalu masukkan ayam suwir dan sedikit garam.", "Bumbui bubur dengan garam dan merica, lalu aduk rata.", "Sajikan bubur dengan ayam, daun bawang, seledri, dan bawang goreng."]
  },
  {
    id: "ayam-teriyaki", name: "Ayam Teriyaki Rumahan", category: "Ayam", author: "TINGGSFOOD", time: 25, servings: 3,
    image: "assets/ayam-teriyaki.jpg",
    description: "Potongan ayam dengan saus teriyaki gurih-manis. Menu praktis untuk makan siang atau bekal.",
    ingredients: ["500 g ayam tanpa tulang, potong kecil", "3 sdm saus teriyaki", "2 sdm kecap manis", "2 siung bawang putih, cincang", "1/2 bawang bombai, iris", "100 ml air", "1 sdm minyak untuk menumis"],
    steps: ["Campur ayam dengan saus teriyaki dan kecap manis, diamkan 10 menit.", "Panaskan minyak lalu tumis bawang putih dan bawang bombai hingga harum.", "Masukkan ayam beserta bumbu rendamannya.", "Tambahkan air dan masak sampai ayam matang serta saus mengental.", "Cicipi rasanya, lalu sajikan dengan nasi hangat."]
  },
  {
    id: "tumis-kangkung-terasi", name: "Tumis Kangkung Terasi", category: "Sayuran", author: "TINGGSFOOD", time: 15, servings: 3,
    image: "assets/tumis-kangkung-terasi.jpg",
    description: "Kangkung tumis dengan bawang, cabai, dan sedikit terasi. Lauk sayur sederhana yang nikmat disantap selagi hangat.",
    ingredients: ["2 ikat kangkung, siangi", "3 siung bawang putih", "4 siung bawang merah", "3 cabai merah atau sesuai selera", "1/2 sdt terasi matang", "2 sdm air", "Garam dan sedikit gula secukupnya"],
    steps: ["Cuci kangkung dan tiriskan.", "Iris bawang merah, bawang putih, dan cabai.", "Panaskan minyak, tumis bumbu bersama terasi sampai harum.", "Masukkan kangkung dan sedikit air, lalu aduk dengan api besar.", "Bumbui dengan garam dan sedikit gula. Masak sebentar sampai kangkung layu, lalu sajikan."]
  },
  {
    id: "martabak-manis", name: "Martabak Manis", category: "Kue", author: "TINGGSFOOD", time: 45, servings: 4,
    image: "assets/martabak-manis.jpg",
    description: "Martabak manis dengan tekstur lembut dan topping manis. Bisa disesuaikan dengan keju, cokelat, atau meses kesukaan.",
    ingredients: ["250 g tepung terigu", "2 sdm gula pasir", "1 butir telur", "300 ml air atau susu", "1/2 sdt baking powder", "1/4 sdt soda kue", "Margarin, gula, dan topping sesuai selera"],
    steps: ["Aduk tepung, gula, telur, dan air hingga adonan licin.", "Diamkan adonan sekitar 20 menit.", "Tambahkan baking powder dan soda kue, aduk rata.", "Tuang ke wajan atau cetakan yang sudah dipanaskan dengan api kecil.", "Saat permukaan berpori, taburi sedikit gula dan tutup hingga matang.", "Olesi margarin dan beri topping sebelum dipotong."]
  },
  {
    id: "nasi-gila", name: "Nasi Gila Pedas Gurih", category: "Masakan Rumahan", author: "TINGGSFOOD", time: 20, servings: 2,
    image: "assets/nasi-gila.jpg",
    description: "Tumis lauk dan sayuran berbumbu yang disajikan di atas nasi hangat. Cocok untuk menu cepat dengan rasa gurih dan sedikit pedas.",
    ingredients: ["2 piring nasi putih hangat", "3 buah bakso, iris", "2 buah sosis, iris", "1 butir telur", "2 siung bawang putih, cincang", "1/2 bawang bombai, iris", "2 sdm kecap manis", "Sawi atau kol secukupnya", "Garam, merica, dan cabai sesuai selera"],
    steps: ["Panaskan sedikit minyak, tumis bawang putih dan bawang bombai.", "Masukkan sosis dan bakso, tumis sebentar.", "Tambahkan telur lalu orak-arik hingga matang.", "Masukkan sayuran, kecap, garam, merica, dan cabai.", "Masak hingga sayuran layu dan bumbu tercampur.", "Sajikan tumisan di atas nasi hangat."]
  },
  {
    id: "sayur-asem", name: "Sayur Asem Segar", category: "Sayuran", author: "TINGGSFOOD", time: 30, servings: 4,
    image: "assets/sayur-asem.jpg",
    description: "Sayur berkuah dengan rasa asam segar dan aneka sayuran. Pas sebagai pendamping lauk rumahan.",
    ingredients: ["1 buah jagung, potong-potong", "1 buah labu siam, potong", "100 g kacang panjang", "Segenggam daun melinjo bila tersedia", "2 sdm air asam jawa", "2 lembar daun salam", "Garam dan gula secukupnya"],
    steps: ["Didihkan air bersama daun salam dan bumbu sayur asem.", "Masukkan jagung dan masak sampai mulai empuk.", "Tambahkan labu siam dan kacang panjang.", "Masukkan daun melinjo serta air asam jawa.", "Bumbui dengan garam dan gula, lalu masak sampai sayuran matang.", "Koreksi rasa dan sajikan hangat."]
  },
  {
    id: "soto-betawi", name: "Soto Betawi Kuah Gurih", category: "Soto & Sup", author: "TINGGSFOOD", time: 55, servings: 4,
    image: "assets/soto-betawi.jpg",
    description: "Soto Betawi dengan kuah gurih, potongan daging, dan pelengkap segar. Sajikan dengan jeruk nipis dan sambal sesuai selera.",
    ingredients: ["400 g daging sapi, potong kecil", "1 liter air kaldu", "200 ml santan atau susu evaporasi", "4 siung bawang merah", "3 siung bawang putih", "1 batang serai, geprek", "2 lembar daun salam", "Garam, merica, dan minyak secukupnya"],
    steps: ["Rebus daging sampai empuk dan sisihkan kaldunya.", "Haluskan bawang merah dan bawang putih, lalu tumis sampai harum.", "Tambahkan serai dan daun salam.", "Masukkan tumisan bumbu ke dalam kaldu dan didihkan kembali.", "Tuang santan atau susu sambil diaduk perlahan, lalu bumbui.", "Masukkan daging dan masak dengan api kecil beberapa menit. Sajikan bersama pelengkap."]
  },
  {
    id: "wonton-chili-oil", name: "Wonton Chili Oil", category: "Camilan", author: "TINGGSFOOD", time: 30, servings: 2,
    image: "assets/wonton-chili-oil.jpg",
    description: "Pangsit isi dengan saus minyak cabai yang pedas dan aromatik. Tingkat kepedasan dapat disesuaikan.",
    ingredients: ["12 lembar kulit pangsit", "150 g ayam cincang", "1 siung bawang putih, haluskan", "1 batang daun bawang, iris", "1 sdm kecap asin", "2 sdm minyak cabai", "1 sdt kecap asin untuk saus", "1 sdt cuka atau air jeruk nipis", "Bawang putih cincang dan wijen secukupnya"],
    steps: ["Campur ayam cincang, bawang putih, daun bawang, dan kecap asin.", "Letakkan sedikit isian pada kulit pangsit lalu lipat rapat.", "Rebus pangsit sampai matang dan mengapung, kemudian tiriskan.", "Campur minyak cabai, kecap asin, cuka, dan bawang putih cincang.", "Aduk pangsit dengan saus atau siram saus di atasnya.", "Taburi wijen dan daun bawang, lalu sajikan."]
  },
  {
    id: "mie-goreng", name: "Mie Goreng Rumahan", category: "Mie", author: "TINGGSFOOD", time: 20, servings: 2,
    image: "assets/mie-goreng.jpg",
    description: "Mie goreng dengan sayuran dan bumbu sederhana. Menu cepat yang fleksibel untuk memakai bahan yang tersedia.",
    ingredients: ["2 porsi mie telur", "1 butir telur", "1 genggam kol, iris", "1 batang daun bawang", "2 siung bawang putih, cincang", "2 sdm kecap manis", "1 sdm kecap asin (opsional)", "Garam dan merica secukupnya"],
    steps: ["Rebus mie sesuai petunjuk kemasan, lalu tiriskan.", "Panaskan minyak dan tumis bawang putih sampai harum.", "Masukkan telur dan orak-arik.", "Tambahkan kol dan daun bawang, tumis sebentar.", "Masukkan mie, kecap manis, kecap asin, garam, dan merica.", "Aduk sampai bumbu merata, lalu sajikan."]
  },
  {
    id: "pepes-ati-ampela", name: "Pepes Ati Ampela", category: "Masakan Rumahan", author: "TINGGSFOOD", time: 50, servings: 3,
    image: "assets/pepes-ati-ampela.jpg",
    description: "Ati ampela berbumbu rempah yang dibungkus daun pisang dan dikukus hingga bumbu meresap. Aroma daun pisang menambah cita rasanya.",
    ingredients: ["300 g ati ampela ayam, bersihkan", "2 lembar daun salam", "2 batang serai, iris tipis", "Daun pisang untuk membungkus", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "2 butir kemiri", "Garam dan gula secukupnya"],
    steps: ["Rebus ati ampela dengan daun salam hingga matang, lalu tiriskan dan potong.", "Haluskan bawang merah, bawang putih, kunyit, kemiri, garam, dan sedikit gula.", "Campur ati ampela dengan bumbu halus dan irisan serai.", "Letakkan campuran di atas daun pisang, lalu bungkus dan sematkan.", "Kukus selama 25–30 menit hingga bumbu meresap.", "Opsional: panggang sebentar sebelum disajikan."]
  }
];

const CATEGORIES = [
  { name: "Masakan Rumahan", icon: "🍲", description: "Menu sehari-hari" },
  { name: "Ayam", icon: "🍗", description: "Olahan ayam" },
  { name: "Sayuran", icon: "🥬", description: "Segar & bergizi" },
  { name: "Kue", icon: "🍰", description: "Manis dan lembut" },
  { name: "Camilan", icon: "🥟", description: "Teman santai" },
  { name: "Soto & Sup", icon: "🍜", description: "Kuah hangat" },
  { name: "Mie", icon: "🍝", description: "Praktis dan gurih" }
];
