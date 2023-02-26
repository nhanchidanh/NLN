import db from "../models";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import chothuephongtro from "../../data/chothuephongtro.json";
import generateCode from "../utils/generateCode";

require("dotenv").config();

const dataBody = chothuephongtro.body;

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insertService = () => {
  return new Promise((resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.header?.class?.classType);
        let attributesId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();

        //Tao bang post
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributesId,
          categoryCode: "CTPT",
          description: JSON.stringify(item?.mainContent?.content), //content la array nen stringify ve chuoi de luu
          userId,
          overviewId,
          imagesId,
        });

        //Tao bang attribute
        await db.Attribute.create({
          id: attributesId,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });

        //Tao bang image
        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });

        //Tao bang label
        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });

        //Tao bang overview
        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((item) => item.name === "Mã tin:")
            ?.content,
          area: item?.overview?.content.find((item) => item.name === "Khu vực")
            ?.content,
          type: item?.overview?.content.find(
            (item) => item.name === "Loại tin rao:"
          )?.content,
          target: item?.overview?.content.find(
            (item) => item.name === "Đối tượng thuê:"
          )?.content,
          bonus: item?.overview?.content.find(
            (item) => item.name === "Gói tin:"
          )?.content,
          created: item?.overview?.content.find(
            (item) => item.name === "Ngày đăng:"
          )?.content,
          expired: item?.overview?.content.find(
            (item) => item.name === "Ngày hết hạn:"
          )?.content,
        });

        //Tao bang user
        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((item) => item.name === "Liên hệ:")
            ?.content,
          password: hashPassword("111111"),
          phone: item?.contact?.content.find(
            (item) => item.name === "Điện thoại:"
          )?.content,
          zalo: item?.contact?.content.find((item) => item.name === "Zalo")
            ?.content,
        });
      });
      resolve("done");
    } catch (error) {
      reject(error);
    }
  });
};
