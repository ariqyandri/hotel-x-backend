"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "contacts",
      [
        {
          platform: "Telephone",
          info: "0205553488",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          linkUrl: "",
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          platform: "Email",
          info: "info@hotelx.com",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          linkUrl: "",
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          platform: "Facebook",
          info: "Hotel X Amsterdam",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          linkUrl: "https://www.facebook.com/",
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          platform: "Instagram",
          info: "@hotelxamsterdam",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          linkUrl: "https://www.instagram.com/",
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          platform: "LinkedIn",
          info: "Hotel X Amsterdam",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          linkUrl: "https://www.linkedin.com/",
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          platform: "Twitter",
          info: "@hotelxamsterdam",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl.",
          linkUrl: "https://www.twitter.com/",
          iconUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_100,w_100/v1611207340/PngItem_111579_bwd4qg.png",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("contacts", null, {});
  },
};
