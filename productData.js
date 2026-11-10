// productData.js
const products = [
    {
        id: 1,
        name: "Oven Single Deck 2 Tray",
        category: "Bakery",
        price: 7500000,
        image: [ "https://i.imgur.com/m7XPTgw.png"],
        description: "FEASBAKE Oven Single Deck merupakan mesin pemanggang profesional yang dirancang untuk memenuhi kebutuhan produksi bakery dan bisnis HORECA. Dilengkapi dengan sistem pengaturan suhu bagian atas dan bawah secara terpisah, mesin ini memberikan fleksibilitas dalam proses pemanggangan berbagai jenis produk. Dengan kapasitas 2 tray dan rentang suhu hingga 300°C, oven ini cocok digunakan untuk memanggang roti, pastry, cookies, brownies, cake, dan berbagai produk bakery lainnya. Memiliki desain yang compact serta konsumsi daya listrik hanya 100 watt, oven ini menjadi pilihan praktis untuk mendukung operasional bakery, café, restoran, dan usaha kuliner.",
        specs: {
        "Model": "FB0D102G",
        "Tray Capacity": "2 Trays",
        "Temperature Range": "0–300°C",
        "Temperature Control": "Digital Touchscreen",
        "Heating Control": "Independent Top & Bottom Temperature",
        "Heating System": "Gas",
        "Gas Consumption": "30 MJ/h",
        "Electrical Power": "100 W",
        "Voltage": "220 V",
        "Dough Capacity": "20 kg",
        "Net Weight": "109 kg",
        "Machine Dimensions": "1340 × 900 × 620 mm",
        "Warranty": "1 Year",
        "Application": "Commercial Bakery & HORECA"
        }
    },
    {
        id: 2,
        name: "Oven Double Deck",
        category: "Bakery",
        price: 15000000,
        image: [ "https://i.imgur.com/DigWh5J.png", "https://i.imgur.com/nCikQaF.png" ],
        description: "FEASBAKE Oven Double Deck merupakan mesin pemanggang profesional yang dirancang untuk mendukung kebutuhan produksi bakery dan bisnis HORECA dengan kapasitas lebih besar. Dilengkapi dengan dua ruang pemanggangan (deck), mesin ini memungkinkan proses pemanggangan dilakukan secara bersamaan sehingga membantu meningkatkan efisiensi dan produktivitas kerja. Cocok digunakan untuk memanggang berbagai jenis produk seperti roti, cake, cookies, brownies, pastry, dan aneka produk bakery lainnya. Dengan desain yang praktis dan kapasitas pemanggangan yang lebih optimal, oven ini menjadi pilihan tepat untuk bakery, café, restoran, hotel, maupun usaha kuliner.",
        specs: {
        "Kategori": "Mesin Bakery",
        "Jenis Mesin": "Oven Double Deck",
        "Konfigurasi": "2 Tingkat Pemanggangan",
        "Aplikasi": "Pemanggangan Komersial",
        "Penggunaan": "Bakery, Café, Restoran, Hotel, dan HORECA",
        "Informasi Teknis": "Untuk informasi mengenai kapasitas, dimensi, daya listrik, konsumsi gas, dan fitur mesin, silakan hubungi tim sales FEASBAKE."
        }
    },
    {
        id: 3,
        name: "Proofer",
        category: "Bakery",
        price: 9999999999,
        image: [ "https://i.imgur.com/SpF2rui.png", "https://i.imgur.com/mQbjmg5.png" ], 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        name: "Meja Tray",
        category: "Bakery",
        price: 4000000,
        image: [ "https://i.imgur.com/gwYXsER.png" , "https://i.imgur.com/cPsEVOh.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        name: "Blender",
        category: "Cafe",
        price: 9999999999,
        image: [ "https://i.imgur.com/eDWEjQR.png", "https://i.imgur.com/kvtTwLs.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 6,
        name: "Meja Bar",
        category: "Cafe",
        price: 9999999999,
        image: [ "https://i.imgur.com/ZtMfxnp.png", "https://i.imgur.com/ugMMFsj.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 7,
        name: "Mesin Es Serut",
        category: "Cafe",
        price: 9999999999,
        image: [ "https://i.imgur.com/AoR9ZV0.png", "https://i.imgur.com/RrBOwJF.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 8,
        name: "Mesin Cup Sealer",
        category: "Cafe",
        price: 9999999999,
        image: [ "https://i.imgur.com/lyLsAwA.png", "https://i.imgur.com/KlLfYMm.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 9,
        name: "Kitchen Set",
        category: "Hotel",
        price: 9999999999,
        image: [ "https://i.imgur.com/ukogfdK.png", "https://i.imgur.com/A6skIkX.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 10,
        name: "Freezer",
        category: "Hotel",
        price: 9999999999,
        image: [ "https://i.imgur.com/PZIqdsF.png", "https://i.imgur.com/SDx9i06.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 11,
        name: "Kulkas",
        category: "Hotel",
        price: 9999999999,
        image: [ "https://i.imgur.com/RLnuWML.png", "https://i.imgur.com/94pWZaL.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 12,
        name: "Tray",
        category: "Aksesoris",
        price: 9999999999,
        image: [ "https://i.imgur.com/HJ4NGA6.png", "https://i.imgur.com/2QNYnYs.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 13,
        name: "Sarung Tangan",
        category: "Aksesoris",
        price: 9999999999,
        image: [ "https://i.imgur.com/U8S17RM.png", "https://i.imgur.com/I8Op4x8.png" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 14,
        name: "Rotary Rack Oven",
        category: "Bakery",
        price: 220000000,
        image: [ "https://i.imgur.com/NsfuGif.jpeg"],
        description: "FEASBAKE Rotary Rack Oven 32 Tray merupakan mesin pemanggang profesional yang dirancang untuk memenuhi kebutuhan produksi bakery dalam skala menengah hingga besar. Dilengkapi dengan sistem rak berputar (rotating rack), oven ini membantu menghasilkan proses pemanggangan yang lebih merata pada seluruh tray. Kapasitas hingga 32 tray memungkinkan pengguna memanggang produk dalam jumlah besar sekaligus, sehingga meningkatkan efisiensi dan produktivitas produksi. Cocok digunakan untuk memanggang berbagai jenis produk seperti roti, pastry, cookies, cake, dan aneka produk bakery lainnya. Dengan kapasitas besar dan sistem pemanggangan yang praktis, Rotary Rack Oven FEASBAKE menjadi solusi ideal untuk bakery komersial, pabrik roti, hotel, restoran, dan bisnis HORECA.",
        specs: {
        "Tipe": "FB-32RG",
        "Kapasitas": "32 Tray",
        "Ukuran Tray": "400 × 600 mm",
        "Sistem Pemanggangan": "Rotary / Rak Berputar",
        "Rentang Suhu": "20–300°C",
        "Voltage": "380 V",
        "Dimensi Mesin": "1660 × 2600 × 2420 mm",
        "Aplikasi": "Pemanggangan Komersial dan Industri",
        "Jenis Produk": "Roti, Pastry, Cookies, Cake, dan Produk Bakery Lainnya",
        "Sistem Pemanas": "Menyesuaikan tipe mesin",
        "Sumber Energi": "Menyesuaikan tipe mesin",
        "Daya Listrik": "Hubungi tim FEASBAKE",
        "Konsumsi Gas": "Hubungi tim FEASBAKE",
        "Tipe Lainnya": "FB-12RG (12 Tray), FB-16RG (16 Tray), FB-64RG (64 Tray)"
        }
    },
];
