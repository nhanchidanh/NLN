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

export const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsersService();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at user controller" + error,
    });
  }
};

//GET ONE USER
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await userService.getUserService(id);

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE USER
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const response = await userService.updateUserService(id, data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await userService.deleteUserService(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
