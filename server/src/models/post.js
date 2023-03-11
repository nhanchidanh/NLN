"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here Cấu hình mối quan hệ giữa các bảng
      //vd: bảng Post có khóa ngoại là imagesId phụ thuộc vào bảng Image có khóa chính là Id
      Post.belongsTo(models.Image, {
        foreignKey: "imagesId",
        targetKey: "id",
        as: "images", //Cung cấp bí danh nếu tạo quan hệ giữa các bảng giống nhau
      });
      Post.belongsTo(models.Attribute, {
        foreignKey: "attributesId",
        targetKey: "id",
        as: "attributes", //Cung cấp bí danh nếu tạo quan hệ giữa các bảng giống nhau
      });
      Post.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "user", //Cung cấp bí danh nếu tạo quan hệ giữa các bảng giống nhau
      }); // 1 user có thể tạo nhiều post nhưng 1 post chỉ thuộc 1 user viết ra nó
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      star: DataTypes.STRING,
      labelCode: DataTypes.STRING,
      address: DataTypes.STRING,
      attributesId: DataTypes.STRING,
      categoryCode: DataTypes.STRING,
      priceCode: DataTypes.STRING,
      areaCode: DataTypes.STRING,
      provinceCode: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.STRING,
      overviewId: DataTypes.STRING,
      imagesId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
