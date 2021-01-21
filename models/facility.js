'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `model/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  facility.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    iconUrl: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
    thumbnailUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'facility',
  });
  return facility;
};