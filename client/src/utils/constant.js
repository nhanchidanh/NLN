export const path = {
  HOME: "/*",
  LOGIN: "login",
  CHO_THUE_PHONG_TRO: "cho-thue-phong-tro",
  CHO_THUE_MAT_BANG: "cho-thue-mat-bang",
  CHO_THUE_CAN_HO: "cho-thue-can-ho",
  NHA_CHO_THUE: "nha-cho-thue",
};

//Ham chuyển title -> slug
export const convertToSlug = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};
