"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      room.belongsTo(models.category);
      room.hasMany(models.picture);
      room.belongsToMany(models.reservation, {
        through: "reservedRooms",
        foreignKey: "roomId",
      });
      room.belongsToMany(models.facility, {
        through: "roomFacility",
        foreignKey: "roomId",
      });
    }
  }
  room.init(
    {
      name: DataTypes.STRING,
      persons: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      description: DataTypes.TEXT,
      priceEuro: DataTypes.INTEGER,
      available: DataTypes.INTEGER,
      thumbnailUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "room",
    }
  );
  return room;
};
