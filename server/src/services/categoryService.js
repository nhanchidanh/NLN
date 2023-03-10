import db from "../models";

//GET ALL CATEGORY

export const getCategoriesService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
      }); //bình thường trả ve instance chứa data và một vài thông số khác. Nhưng có raw:true thì trả về data{}
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
