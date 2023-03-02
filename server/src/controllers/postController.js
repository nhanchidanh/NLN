import * as postService from "../services/postService";

export const getPost = async (req, res) => {
  try {
    const response = await postService.getPostsService();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(200).json({
      err: -1,
      msg: "Failed at post Controller",
    });
  }
};

export const getPostLimit = async (req, res) => {
  const { page } = req.query;
  try {
    const response = await postService.getPostsLimitService(page);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(200).json({
      err: -1,
      msg: "Failed at post Controller",
    });
  }
};
