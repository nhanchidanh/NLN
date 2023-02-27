export const getDistrictProvince = (address) => {
  return `${address.split(",")[address.split(",").length - 2]}, ${
    address.split(",")[address.split(",").length - 1]
  }`;
};
