import axios from "../axiosConfig";
import axiosDefault from "axios";

export const apiGetPriceRanges = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "api/v1/price-range/all",
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdatePriceRange = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "put",
        url: "api/v1/price-range/update",
        data: payload,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const apigetAreaRanges = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "api/v1/area-range/all",
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdateAreaRange = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "put",
        url: "api/v1/area-range/update",
        data: payload,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const apiGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "api/v1/province/all",
      });
      // console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: "https://vapi.vnappmob.com/api/province/",
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicDistricts = (provinceId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPublicWards = (districtId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
