"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      contact.belongsTo(models.category);
    }
  }
  contact.init(
    {
      platform: DataTypes.STRING,
      info: DataTypes.STRING,
      description: DataTypes.TEXT,
      linkUrl: DataTypes.STRING,
      iconUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "contact",
    }
  );
  return contact;
};
