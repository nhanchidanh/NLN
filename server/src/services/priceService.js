import db from "../models";

//GET ALL PRICE

export const getPricesService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: true,
        attributes: ["code", "value", "order"], //chỉ định trường cần lấy data
      }); //bình thường trả ve instance chứa data và một vài thông số khác. Nhưng có raw:true thì trả về data{}
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get pricesService.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
