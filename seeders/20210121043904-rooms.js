"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          name: "Room A",
          persons: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/1-star-411-1030x678.jpg",
          priceEuro: 55,
          available: 6,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Room B",
          persons: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/2-star-504-1030x678.jpg",
          priceEuro: 75,
          available: 4,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Room C",
          persons: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/3-star-118-1030x678.jpg",
          priceEuro: 100,
          available: 4,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Room D",
          persons: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-510-1030x686.jpg",
          priceEuro: 120,
          available: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rooms E",
          persons: 6,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-Room-222.jpg",
          priceEuro: 150,
          available: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
