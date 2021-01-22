"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "attractions",
      [
        {
          name: "Stedelijk Museum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          address: "Museumplein 10, 1071 DJ Amsterdam",
          linkUrl: "https://www.stedelijk.nl/",
          imageUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/v1611319893/1557417206664_bscx9w.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rijksmuseum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          address: "Museumstraat 1, 1071 XX Amsterdam",
          linkUrl: "https://www.rijksmuseum.nl/",
          imageUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/v1611319953/Rijksmuseum-nacht-009_hocczt.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Concertgebouw",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          address: "Concertgebouwplein 10, 1071 LN Amsterdam",
          linkUrl: "http://www.concertgebouw.nl/",
          imageUrl:
            "https://res.cloudinary.com/doai9yryh/image/upload/c_scale,h_763/v1611210978/Royal-Concertgebouw_Amsterdam_Grote-Zaal-Hans-Samsom_mqf4mp.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Café Martinot",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. ",
          address: "CMoreelsestraat 3, 1071 BJ Amsterdam",
          linkUrl: "https://cafemartinot.nl/",
          imageUrl:
            "https://media-cdn.tripadvisor.com/media/photo-s/13/b5/24/ea/food-is-our-best-friend.jpg",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("attractions", null, {});
  },
};
