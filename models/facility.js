'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Facility.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    iconUrl: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
    thumbnailUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Facility',
  });
  return Facility;
};