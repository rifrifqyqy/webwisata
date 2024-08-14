// server/api/destinations.js

export default defineEventHandler((event) => {
  const destinations = [
    {
      id: 1,
      title: "Pantai Kuta",
      thumb:
        "https://images.unsplash.com/photo-1541739296801-2412947056ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Pantai indah dengan pasir putih dan ombak yang cocok untuk berselancar.",
      category: "pantai",
      rating: 8,
      paketwisata: [
        {
          id: 1,
          name: "Transportasi",
          price: 1200000,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png",
        },
        {
          id: 2,
          name: "Penginapan",
          price: 1000000,
          imageUrl:
            "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
        },
        {
          id: 3,
          name: "Makanan",
          price: 500000,
          imageUrl:
            "https://desty-upload-indonesia.oss-ap-southeast-5.aliyuncs.com/desty-page/a2404b17d6564e5d8a032f4fdfdeff58.png",
        },
      ],
      maps: "https://maps.app.goo.gl/zdxFcABwbAmdc7ZX6",
      location: "Bali",
      gallery: [
        {
          id: 1,
          imageUrl:
            "https://img.freepik.com/free-photo/high-angle-shot-lot-rock-formations-near-sea-beach-daytime_181624-19591.jpg?t=st=1723580702~exp=1723584302~hmac=5a8e500561ea2434f6175884c913aed2fcaec336083d2048589a0e6e67ca0ace&w=1060",
        },
        {
          id: 2,
          imageUrl:
            "https://img.freepik.com/free-photo/rock-ocean-landscape_1296-486.jpg?t=st=1723580739~exp=1723584339~hmac=9dba814dac8e22abe01859016c9ce5c428b5a9d2dcd8e1f91331cc1f49809afb&w=1060",
        },
        {
          id: 3,
          imageUrl:
            "https://img.freepik.com/free-photo/panoramic-view-broken-beach-nusa-penida-bali-indonesia-blue-sky-turquoise-water_231208-1542.jpg?t=st=1723580760~exp=1723584360~hmac=3159f0afc0aa1640d868a96c9b3ddeeb9296e56897441faace71cdd044e36a45&w=1060",
        },
        {
          id: 4,
          imageUrl:
            "https://img.freepik.com/free-photo/magnificent-view-unique-natural-rocks-cliffs-formation-beautiful-beach-known-as-angel-s-billabong-beach-located-east-side-nusa-penida-island-bali-indonesia-aerial-view_1321-1875.jpg?t=st=1723580779~exp=1723584379~hmac=a8ec39c8bd33935295541e847a0f88f5403ca978a071f679e085cc177d0084a8&w=1060",
        },
      ],
      mapsFrame:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15158.677171234569!2d115.14855049425685!3d-8.718032053661576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc2ab70d43%3A0x82feaae12f4ab48e!2sPantai%20Kuta!5e1!3m2!1sid!2sid!4v1723582296994!5m2!1sid!2sid",
    },
    {
      id: 2,
      title: "Gunung Bromo",
      thumb:
        "https://images.unsplash.com/photo-1567320032761-8d7fb7a5aa4e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Gunung berapi yang terkenal dengan pemandangan matahari terbit yang spektakuler.",
      category: "gunung",
      rating: 8.8,
      paketwisata: [
        {
          id: 1,
          name: "Transportasi",
          price: 300000,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png",
        },
        {
          id: 2,
          name: "Penginapan",
          price: 500000,
          imageUrl:
            "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
        },
        {
          id: 3,
          name: "Makanan",
          price: 200000,
          imageUrl:
            "https://desty-upload-indonesia.oss-ap-southeast-5.aliyuncs.com/desty-page/a2404b17d6564e5d8a032f4fdfdeff58.png",
        },
      ],
      maps: "https://goo.gl/maps/xQ5j3Ys1VZ92",
      location: "Jawa Timur",
      gallery: [
        {
          id: 1,
          imageUrl:
            "https://img.freepik.com/free-photo/volcano-with-mist-sunset_1150-18323.jpg?t=st=1723580828~exp=1723584428~hmac=090c87c78d9558cb57affbe6350c4cf69ceefb6952cbe18959b63fe8aa602ac6&w=1060",
        },
        {
          id: 2,
          imageUrl:
            "https://img.freepik.com/free-photo/mountainous-landscape-with-fog_1150-18329.jpg?t=st=1723580848~exp=1723584448~hmac=bfaa8e2b9efcc6b4780a508d32e386741811c6bd12921737e1ae441841f9c3ce&w=1060",
        },
        {
          id: 3,
          imageUrl:
            "https://img.freepik.com/free-photo/mount-bromo-volcano-bromo-tengger-semeru-national-park-east-java-indonesia_335224-382.jpg?t=st=1723580869~exp=1723584469~hmac=c194f21604372c3c88a6662d259acc8281c0343243f677ee3135779cec126a7b&w=1060",
        },
        {
          id: 4,
          imageUrl:
            "https://images.unsplash.com/photo-1510276951670-d0612dafe028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 5,
          imageUrl:
            "https://images.unsplash.com/photo-1625503298702-991586e80ae7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      mapsFrame:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15188.751139226806!2d112.94271244493407!3d-7.942493323305602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e1!3m2!1sid!2sid!4v1723582332889!5m2!1sid!2sid",
    },
    {
      id: 3,
      title: "Resort Nusa Dua",
      thumb:
        "https://images.unsplash.com/photo-1669694575282-03ed7faf6360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Resort mewah dengan pemandangan laut dan fasilitas lengkap.",
      category: "resort",
      rating: 8.8,
      paketwisata: [
        {
          id: 1,
          name: "Transportasi",
          price: 300000,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png",
        },
        {
          id: 2,
          name: "Penginapan",
          price: 500000,
          imageUrl:
            "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
        },
        {
          id: 3,
          name: "Makanan",
          price: 200000,
          imageUrl:
            "https://desty-upload-indonesia.oss-ap-southeast-5.aliyuncs.com/desty-page/a2404b17d6564e5d8a032f4fdfdeff58.png",
        },
      ],
      maps: "https://maps.app.goo.gl/YDEY9G19hLx1tf6E9",
      location: "Bali",
      gallery: [
        {
          id: 1,
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1675039871449-62f86fb78a70?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1675039871139-06cc792da9a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 5,
          imageUrl:
            "https://images.unsplash.com/photo-1714254567463-26966f6ba4ba?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      mapsFrame:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.9617003290102!2d115.22927986955095!3d-8.79168919945378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24322042a2c9f%3A0x9c15915f406531c3!2sSofitel%20Bali%20Nusa%20Dua%20Beach%20Resort!5e1!3m2!1sid!2sid!4v1723482452167!5m2!1sid!2sid",
    },
    {
      id: 4,
      title: "Museum Nasional Indonesia",
      thumb:
        "https://images.unsplash.com/photo-1688701035915-ad0399f05667?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Museum yang menampilkan sejarah dan budaya Indonesia.",
      category: "museum",
      rating: 8.8,
      paketwisata: [
        {
          id: 1,
          name: "Transportasi",
          price: 300000,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png",
        },
        {
          id: 2,
          name: "Penginapan",
          price: 500000,
          imageUrl:
            "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
        },
        {
          id: 3,
          name: "Makanan",
          price: 200000,
          imageUrl:
            "https://desty-upload-indonesia.oss-ap-southeast-5.aliyuncs.com/desty-page/a2404b17d6564e5d8a032f4fdfdeff58.png",
        },
      ],
      maps: "https://goo.gl/maps/zQ4r2X5s3X92",
      location: "Jakarta",
      gallery: [
        {
          id: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1642088853782-a7f33504ae96?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1688701035915-ad0399f05667?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1701773067697-73a8d4ace822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      mapsFrame:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15246.845004066749!2d106.8215901!3d-6.1764021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d4b571f28b%3A0xa41541566f6058ed!2sMuseum%20Nasional%20Indonesia!5e1!3m2!1sid!2sid!4v1723582043539!5m2!1sid!2sid",
    },
    {
      id: 5,
      title: "Restoran Sate Senayan",
      thumb:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Restoran terkenal dengan hidangan sate yang lezat.",
      category: "restaurant",
      rating: 8.8,
      paketwisata: [
        {
          id: 1,
          name: "Transportasi",
          price: 300000,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/768px-AirAsia_New_Logo.svg.png",
        },
        {
          id: 2,
          name: "Penginapan",
          price: 500000,
          imageUrl:
            "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png",
        },
        {
          id: 3,
          name: "Makanan",
          price: 200000,
          imageUrl:
            "https://desty-upload-indonesia.oss-ap-southeast-5.aliyuncs.com/desty-page/a2404b17d6564e5d8a032f4fdfdeff58.png",
        },
      ],
      maps: "https://goo.gl/maps/aQ2r5Xs6Yz92",
      location: "Jakarta",
      gallery: [
        {
          id: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      mapsFrame:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15246.875506815311!2d106.79320638715822!3d-6.1753427999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f67e6e02f865%3A0xc92ce88640cf04fd!2sSate%20%26%20Seafood%20Senayan!5e1!3m2!1sid!2sid!4v1723582220994!5m2!1sid!2sid",
    },
  ];

  return destinations;
});
