import * as areaRangeService from "../services/areaRangeService";

export const getAreas = async (req, res) => {
  try {
    const response = await areaRangeService.getAreasService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at area controller" + error,
    });
  }
};
