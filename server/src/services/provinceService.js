import db from "../models";

//GET ALL PROVINCE

export const getProvincesService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.findAll({
        raw: true,
        attributes: ["code", "value"], //chỉ định trường cần lấy data
      }); //bình thường trả ve instance chứa data và một vài thông số khác. Nhưng có raw:true thì trả về data{}
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get provincesService.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
