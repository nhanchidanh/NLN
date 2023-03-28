import axiosConfig from "../axiosConfig";
import axios from "axios";

export const apiGetPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "api/v1/post/all",
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const apiGetPostsLimit = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `api/v1/post/limit`,
        params: query,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const apiGetNewPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `api/v1/post/new-post`,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const apiCreatePost = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `api/v1/post/create-post`,
        data: body,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const apiUploadImages = (images) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "post",
        url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        data: images,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
