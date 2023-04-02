import db from "../models";
import { Op } from "sequelize";

//GET ALL POSTS
export const getPostsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Image, as: "image", attributes: ["url"] },

          {
            model: db.User,
            as: "user",
            attributes: ["fullName", "phone"],
          },
        ],
        // attributes: ["id", "title", "address", "description"], //bao gom cả data đã include ở trên
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

//GET POST LIMIT
export const getPostsLimitService = (page, query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      const categoryId = +query.categoryId || "";
      const province = query.province || "";
      const priceRangeStart = +query.priceRangeStart || 0;
      const priceRangeEnd = +query.priceRangeEnd || 9999999;
      const areaRangeStart = +query.areaRangeStart || 0;
      const areaRangeEnd = +query.areaRangeEnd || 99999999;
      const priceRangeId = +query.priceRangeId || 0;
      const areaRangeId = +query.areaRangeId || 0;
      const isNew = +query.isNew || 0;

      const response = await db.Post.findAll({
        // logging: true,

        where: {
          price: {
            [Op.between]: [priceRangeStart, priceRangeEnd],
          },
          area: {
            [Op.between]: [areaRangeStart, areaRangeEnd],
          },
          province: {
            [Op.substring]: province,
          },
          categoryId: {
            [categoryId === "" ? Op.ne : Op.eq]: categoryId,
          },
          priceRangeId: {
            [priceRangeId === 0 ? Op.is : Op.eq]:
              priceRangeId === 0 ? !null : priceRangeId,
          },
          areaRangeId: {
            [areaRangeId === 0 ? Op.is : Op.eq]:
              areaRangeId === 0 ? !null : areaRangeId,
          },
        },
        // raw: true,
        order: [["createdAt", isNew === 1 ? "DESC" : "ASC"]],
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,

        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["url"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["fullName", "phone"],
          },
        ],

        // attributes: ["id", "title" "address", "description"], //bao gom cả data đã include ở trên
      });

      // console.log("response", response);

      const count = await db.Post.count({
        where: {
          price: {
            [Op.between]: [priceRangeStart, priceRangeEnd],
          },
          area: {
            [Op.between]: [areaRangeStart, areaRangeEnd],
          },
          province: {
            [Op.substring]: province,
          },
          categoryId: {
            [categoryId === "" ? Op.ne : Op.eq]: categoryId,
          },
          priceRangeId: {
            [priceRangeId === 0 ? Op.is : Op.eq]:
              priceRangeId === 0 ? !null : priceRangeId,
          },
          areaRangeId: {
            [areaRangeId === 0 ? Op.is : Op.eq]:
              areaRangeId === 0 ? !null : areaRangeId,
          },
        },
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed at post Service",
        response,
        count,
      });
    } catch (error) {
      reject(error);
    }
  });
};

//GET NEW POST
export const getNewPostService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        // raw: true,
        nest: true,
        offset: 0,
        order: [["createdAt", "DESC"]], //order by DESC loc theo kieu giam dan
        limit: +process.env.LIMIT,
        include: [{ model: db.Image, as: "images", attributes: ["url"] }],
        // attributes: ["id", "title", "star", "createdAt"], //bao gom cả data đã include ở trên
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

//CREATE POST
export const createPostService = (body, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.create({
        title: body.title,
        description: body.description,
        price: body.price,
        area: body.area,
        address: body.address,
        province: body.province,
        categoryId: body.categoryId,
        priceRangeId: body.priceRangeId,
        areaRangeId: body.areaRangeId,
        target: body.target,
        userId,
      });
      // console.log(body.images);

      for (let i = 0; i < body.images.length; i++) {
        const image = await db.Image.create({
          url: body.images[i],
          postId: post.id,
        });
      }

      resolve({
        err: 0,
        msg: "Create successfully!",
        post,
      });
    } catch (error) {
      reject(error);
    }
  });
};
