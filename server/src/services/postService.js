import db from "../models";

export const getPostsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo"],
          },
        ],
        attributes: ["id", "title", "star", "address", "description"], //bao gom cả data đã include ở trên
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed at post Service",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getPostsLimitService = (offset) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT || 0,
        limit: +process.env.LIMIT,
        include: [
          { model: db.Image, as: "images", attributes: ["image"] },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo"],
          },
        ],
        attributes: ["id", "title", "star", "address", "description"], //bao gom cả data đã include ở trên
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed at post Service",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
