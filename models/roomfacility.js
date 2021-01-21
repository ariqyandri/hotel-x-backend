"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roomFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roomFacility.belongsTo(models.room);
      roomFacility.belongsTo(models.facility);
    }
  }
  roomFacility.init(
    {
      roomId: DataTypes.INTEGER,
      facilityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "roomFacility",
    }
  );
  return roomFacility;
};
