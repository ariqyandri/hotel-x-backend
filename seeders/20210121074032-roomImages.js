"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "roomImages",
      [
        {
          title: "Room A 1",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/1-star-411-1030x678.jpg",
          roomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room A 2",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/1-star-511-1030x678.jpg",
          roomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room A 3",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/041028-LloydH-MVRDV-42-1030x684.jpg",
          roomId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room B 1",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/2-star-504-1030x678.jpg",
          roomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room B 2",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-516.jpg",
          roomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room B 3",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/2-star-504-Bathroom-1030x678.jpg",
          roomId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room C 1",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-604.jpg",
          roomId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room C 2",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/2-star-504-1030x678.jpg",
          roomId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room C 3",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/3-star-118-Bathroom_V1-1030x678.jpg",
          roomId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room D 1",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-510-1030x686.jpg",
          roomId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room D 2",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/4-star-210_Angle_1-1030x678.jpg",
          roomId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room D 3",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/4-star-210_Angle_2-1030x678.jpg",
          roomId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room E 1",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-Room-222.jpg",
          roomId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room E 2",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-Room-221.jpg",
          roomId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Room E 3",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          url:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-607.jpg",
          roomId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roomImages", null, {});
  },
};
