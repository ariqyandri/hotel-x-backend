"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Rooms",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed.",
          imageUrl:
            "https://images.unsplash.com/photo-1590490359854-dfba19688d70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Facilities",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. ",
          imageUrl:
            "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Attractions",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. ",
          imageUrl:
            "https://images.unsplash.com/photo-1499762524203-b47f7b1b26a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "About",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. ",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-Exterior-1-1030x687.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Contact",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. ",
          imageUrl:
            "https://i.pinimg.com/originals/be/d7/7f/bed77f51949adf8bd8b92e88e7bbeda7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
