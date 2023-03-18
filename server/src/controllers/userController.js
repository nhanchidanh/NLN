import * as userService from "../services/userService";

export const getCurrentUser = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await userService.getCurrentUserService(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at user controller" + error,
    });
  }
};
