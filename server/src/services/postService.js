import db from "../models";

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
      const response = await db.Post.findAll({
        where: query,
        // raw: true,
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

      const count = await db.Post.count();

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
