"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "facilities",
      [
        {
          id: 1,
          name: "X Cafe & Restaurant",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          isPublic: true,
          iconUrl: "",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/coronaopstelling-restaurant-1030x687.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "X Bar & Lounge",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          isPublic: true,
          iconUrl: "",
          imageUrl:
            "https://images.unsplash.com/photo-1434569842867-4d6d1d4d1ef0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Rent a Bike",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          isPublic: true,
          iconUrl: "",
          imageUrl:
            "https://images.unsplash.com/photo-1455641374154-422f32e234cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Free Wi-Fi",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          isPublic: true,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "24-Hour Room Service",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          isPublic: true,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Wake-up Service",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          isPublic: true,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "1 x Double Bed",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "2 x Double Beds",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "3 x Double Beds",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Shower",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Shower and/or Bathtub",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "Seating Area",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: "Laptop-sized safe",
          description: "",
          isPublic: false,
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          imageUrl: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("facilities", null, {});
  },
};
