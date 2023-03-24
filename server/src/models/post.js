"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Category, {
        foreignKey: "categoryId",
        targetKey: "id",
        as: "category",
      }),
        Post.belongsTo(models.Province, {
          foreignKey: "provinceId",
          targetKey: "id",
          as: "province",
        }),
        Post.belongsTo(models.User, {
          foreignKey: "userId",
          targetKey: "id",
          as: "user",
        }),
        //Mot post co nhieu image
        Post.hasMany(models.Image, {
          foreignKey: "postId",
          as: "image",
        });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      area: DataTypes.INTEGER,
      status: DataTypes.ENUM,
      address: DataTypes.STRING,
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      provinceId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Provinces",
          key: "id",
        },
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      status: {
        type: DataTypes.ENUM,
        values: ["SHOW", "HIDE"],
        defaultValue: "SHOW",
      },
      target: {
        type: DataTypes.ENUM,
        values: ["ALL", "MALE", "FEMALE"],
        defaultValue: "ALL",
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
