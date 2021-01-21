"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roomPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roomPicture.belongsTo(models.room);
    }
  }
  roomPicture.init(
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
      modelName: "roomPicture",
    }
  );
  return roomPicture;
};
