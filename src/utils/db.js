export const products = {
  fashion: {
    jackets: {
      categoryName: "jackets",
      background_image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
      items: [
        {
          id: 1,
          name: "Alpha Jacket",
          price: 49.99,
          color: ["Black", "White"],
          description:
            "Donec malesuada eleifend ullamcorper. Cras porttitor risus at sagittis iaculis. Vestibulum non lacus quis purus viverra fringilla sed in augue.",
          stock: 14,
        },
        {
          id: 2,
          name: "Beta Jacket",
          price: 79.99,
          color: ["Black", "White", "Brown"],
          description:
            "Aliquam euismod sem augue, vel vehicula velit vehicula sit amet.",
          stock: 10,
        },
        {
          id: 3,
          name: "Gamma Jacket",
          price: 109.99,
          color: ["Silver", "White", "Brown"],
          description:
            "Etiam diam mauris, commodo varius lectus at, sodales pretium odio. Morbi ultricies nunc eu odio bibendum, sit amet volutpat mi vestibulum. ",
          stock: 7,
        },
      ],
    },
    hats: {
      categoryName: "hats",
      background_image:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
      items: [
        {
          id: 4,
          name: "Alpha Hat",
          price: 9.99,
          colors: ["Black", "White", "Pink", "Green", "Red"],
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          stock: 13,
        },
        {
          id: 5,
          name: "Beta Hat",
          price: 19.99,
          colors: ["Black", "Green", "Red"],
          description:
            "Curabitur congue efficitur felis a molestie. Aenean et tempus tortor, quis finibus odio. Sed finibus vel lacus eget placerat.",
          stock: 9,
        },
        {
          id: 6,
          name: "Gamma Hat",
          price: 29.99,
          colors: ["Black", "Green", "Red", "Gold"],
          description:
            "Duis erat nibh, pharetra et dictum et, ultrices feugiat mauris. Cras ut tellus rhoncus, malesuada urna maximus, luctus nisl.",
          stock: 6,
        },
      ],
    },
  },
  tech: {
    tablets: {
      categoryName: "tablets",
      background_image:
        "https://images.unsplash.com/photo-1585789575907-1cce3586e3a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
      items: [
        {
          id: 7,
          background_image:
            "https://images.unsplash.com/photo-1471279136892-55af5dc6895f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "iPad mini 5",
          price: 499,
          colors: ["Gold", "Silver", "Black"],
          description:
            "Donec odio quam, eleifend at sapien sit amet, egestas aliquet felis. Phasellus a efficitur arcu. Integer at hendrerit enim.",
          stock: 5,
        },
        {
          id: 8,
          background_image:
            "https://images.unsplash.com/photo-1583159230463-20f92c679f89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "Asus Memopad HD 9",
          price: 199,
          colors: ["White", "Black", "Silver"],
          description:
            "Maecenas sagittis diam lorem, quis facilisis libero tempor at. Etiam fermentum rutrum felis. Etiam eu libero non elit rutrum mattis at id elit.",
          stock: 8,
        },
        {
          id: 9,
          background_image:
            "https://images.unsplash.com/photo-1521159311222-fcd72db9bd8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "Samsung Tab S6",
          price: 899,
          colors: ["White", "Black", "Silver"],
          description:
            "Pellentesque in nisi tellus. Duis imperdiet, ligula in consequat ullamcorper, ligula magna fermentum lectus, sit amet vehicula nisl purus et metus.",
          stock: 3,
        },
      ],
    },
    smartphones: {
      categoryName: "smartphones",
      background_image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
      items: [
        {
          id: 10,
          background_image:
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "iPhone XR",
          price: 599,
          colors: ["Yellow", "Blue", "Black", "Red", "White"],
          description:
            "In hac habitasse platea dictumst. Suspendisse nec sodales enim. Curabitur ultricies nisl et orci venenatis, in feugiat lorem suscipit.",
          stock: 10,
        },
        {
          id: 11,
          background_image:
            "https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "iPhone XS MAX",
          price: 799,
          colors: ["Black", "White"],
          description:
            "Morbi rutrum, risus sit amet lobortis accumsan, elit urna consequat augue, non aliquam eros tellus a augue.",
          stock: 8,
        },
        {
          id: 12,
          background_image:
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "Samsung S21",
          price: 699,
          colors: ["Black", "White", "Pink Gold", "Laser Blue"],
          description:
            "Nulla at mollis velit. Sed diam enim, condimentum in lobortis eget, auctor eu dui.",
          stock: 12,
        },
      ],
    },
    computers: {
      categoryName: "computers",
      background_image:
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
      items: [
        {
          id: 13,
          background_image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80",
          name: "MacBook Pro",
          price: 1499,
          colors: ["Silver", "Dark"],
          specs: {
            cpu: "A1",
            ram: "16 GB",
            memory: "1 TB",
          },
          description:
            "Aenean vitae nibh eget arcu rutrum finibus. Praesent fringilla arcu ac massa sollicitudin, et tincidunt massa congue.",
          stock: 7,
        },
        {
          id: 14,
          background_image:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80",
          name: "Asus X750C",
          price: 1099,
          colors: ["Black", "White", "Blue"],
          specs: {
            cpu: "AMD",
            ram: "12 GB",
            memory: "2 TB",
          },
          description:
            "Quisque quis auctor lacus. Duis aliquam sit amet odio eu varius. Integer at pulvinar arcu. Praesent quis iaculis libero.",
          stock: 4,
        },
        {
          id: 15,
          background_image:
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
          name: "Dell Control S24",
          price: 1299,
          colors: ["Black", "White", "Silver"],
          specs: {
            cpu: "INTEL",
            ram: "16 GB",
            memory: "1 TB",
          },
          description:
            "Mauris nec eros sed magna gravida vestibulum. Quisque quis faucibus nunc, vitae porttitor nibh.",
          stock: 6,
        },
      ],
    },
  },
};
