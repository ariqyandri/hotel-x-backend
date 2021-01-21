"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      about.belongsTo(models.category);
    }
  }
  about.init(
    {
      name: DataTypes.STRING,
      slogan: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "about",
    }
  );
  return about;
};
