import React, { memo } from "react";

const provinceBtn = ({ name, image }) => {
  return (
    <div className=" shadow-md rounded-bl-md rounded-br-md">
      <img
        src={image}
        alt={name}
        className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="font-medium text-blue-700 p-2 text-center">{name}</div>
    </div>
  );
};

export default memo(provinceBtn);
