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
    },
  ];

  return destinations;
});
