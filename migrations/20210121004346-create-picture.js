"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pictures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      caption: {
        type: Sequelize.TEXT,
      },
      url: {
        type: Sequelize.STRING,
      },
      iconUrl: {
        type: Sequelize.STRING,
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
      },
      referenceId: {
        type: Sequelize.INTEGER,
        references: [
          {
            model: "rooms",
            key: "id",
          },
          {
            model: "facilities",
            key: "id",
          },
          {
            model: "attractions",
            key: "id",
          },
          {
            model: "abouts",
            key: "id",
          },
          {
            model: "contacts",
            key: "id",
          },
        ],
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: [
          {
            model: "categories",
            key: "id",
          },
          {
            model: "rooms",
            key: "categoryId",
          },
          {
            model: "facilities",
            key: "categoryId",
          },
          {
            model: "attractions",
            key: "categoryId",
          },
          {
            model: "abouts",
            key: "categoryId",
          },
          {
            model: "contacts",
            key: "categoryId",
          },
        ],
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pictures");
  },
};
