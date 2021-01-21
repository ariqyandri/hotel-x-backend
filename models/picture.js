"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      picture.belongsTo(models.category);
      picture.belongsTo(models.room);
      picture.belongsTo(models.facility);
      picture.belongsTo(models.attraction);
      picture.belongsTo(models.about);
      picture.belongsTo(models.contact);
    }
  }
  picture.init(
    {
      title: DataTypes.STRING,
      caption: DataTypes.TEXT,
      url: DataTypes.STRING,
      iconUrl: DataTypes.STRING,
      thumbnailUrl: DataTypes.STRING,
      referenceId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "picture",
    }
  );
  return picture;
};
