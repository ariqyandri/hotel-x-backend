"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.hasMany(models.room);
      category.hasMany(models.facility);
      category.hasMany(models.attraction);
      category.hasMany(models.about);
      category.hasMany(models.contact);
    }
  }
  category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      thumbnailUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};
