import * as areaService from "../services/areaService";

export const getAreas = async (req, res) => {
  try {
    const response = await areaService.getAreasService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at area controller" + error,
    });
  }
};
