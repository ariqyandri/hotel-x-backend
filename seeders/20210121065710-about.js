"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "abouts",
      [
        {
          name: "Hotel X",
          slogan: "Quality X Comfort X Value",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus sem, porttitor eget augue eget, lacinia mollis nisl. Donec fermentum dui enim, in efficitur elit consequat sed. Vestibulum aliquet mauris nisi, vel tincidunt leo tempus a. Quisque ultrices vitae tellus ac dignissim. Donec a odio ornare, blandit metus ut, fringilla eros. Maecenas mollis sit amet odio at laoreet. Duis at ornare metus, vel laoreet metus. Phasellus varius justo in neque facilisis ultrices. Etiam quis erat sodales nisi consequat sollicitudin nec rhoncus urna.\n Nunc iaculis pulvinar mi, at dignissim turpis fermentum nec. Aenean et lectus risus. Quisque vel nunc efficitur, luctus felis a, rutrum mauris. Duis sed sem ipsum. Donec commodo augue id sapien finibus, in tempus leo gravida. Aenean congue magna id auctor rhoncus. Fusce volutpat placerat nisi, efficitur lacinia diam vehicula id. Suspendisse eget porta augue, eget ornare nisi.",
          address: "Paulus Potterstraat 50, 1071 DB Amsterdam",
          phone: "0205553488",
          email: "info@hotelx.com",
          imageUrl:
            "https://43ohug129f2628aqz21xoo1v-wpengine.netdna-ssl.com/wp-content/uploads/Lloyd-Hotel-Exterior-1-1030x687.jpg",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("abouts", null, {});
  },
};
