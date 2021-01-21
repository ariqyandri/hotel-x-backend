"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `model/index` file will call this method automatically.
     */
    static associate(models) {
      facility.belongsTo(models.category);
      facility.belongsToMany(models.room, {
        through: "roomFacility",
        foreignKey: "facilityId",
      });
    }
  }
  facility.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      iconUrl: DataTypes.STRING,
      isPublic: DataTypes.BOOLEAN,
      imageUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "facility",
    }
  );
  return facility;
};
