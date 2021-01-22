"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          id: 1,
          name: "Room A",
          persons: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/1-star-411-1030x678.jpg",
          priceEuro: 55,
          available: 6,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Room B",
          persons: 2,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-604.jpg",
          priceEuro: 75,
          available: 4,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Room C",
          persons: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/3-star-118-1030x678.jpg",
          priceEuro: 100,
          available: 4,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Room D",
          persons: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-510-1030x686.jpg",
          priceEuro: 120,
          available: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Rooms E",
          persons: 6,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
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
