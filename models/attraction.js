"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      attraction.belongsTo(models.category);
    }
  }
  attraction.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      address: DataTypes.STRING,
      isPublic: DataTypes.BOOLEAN,
      linkUrl: DataTypes.STRING,
      thumbnailUrl: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "attraction",
    }
  );
  return attraction;
};
