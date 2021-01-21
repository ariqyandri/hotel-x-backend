"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roomImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roomImage.belongsTo(models.room);
    }
  }
  roomImage.init(
    {
      title: DataTypes.STRING,
      caption: DataTypes.TEXT,
      url: DataTypes.STRING,
      roomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "roomImage",
    }
  );
  return roomImage;
};
