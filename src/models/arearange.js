"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AreaRange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AreaRange.init(
    {
      title: DataTypes.STRING,
      from: DataTypes.INTEGER,
      to: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AreaRange",
    }
  );
  return AreaRange;
};
