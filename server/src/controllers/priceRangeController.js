import * as priceRangeService from "../services/priceRangeService";

export const getPrices = async (req, res) => {
  try {
    const response = await priceRangeService.getPricesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at price controller" + error,
    });
  }
};
