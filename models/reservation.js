"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reservation.belongsToMany(models.room, {
        through: "reservedRooms",
        foreignKey: "reservationId",
      });
    }
  }
  reservation.init(
    {
      code: { type: DataTypes.DATE, unique: true },
      checkIn: { type: DataTypes.DATE, allowNull: false },
      checkOut: { type: DataTypes.DATE, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      note: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return reservation;
};
