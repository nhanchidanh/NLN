import db from "../models";

//GET CURRENT USER

export const getCurrentUserService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        raw: true,
        attributes: {
          exclude: ["password"],
        }, //chỉ định trường cần lấy data
      }); //bình thường trả ve instance chứa data và một vài thông số khác. Nhưng có raw:true thì trả về data{}
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get one user service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
