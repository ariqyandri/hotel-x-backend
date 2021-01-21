"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservedRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reservedRoom.belongsTo(models.reservation);
      reservedRoom.belongsTo(models.room);
    }
  }
  reservedRoom.init(
    {
      reservationId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reservedRoom",
    }
  );
  return reservedRoom;
};
