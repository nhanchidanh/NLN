import React, { memo } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const notActive = "px-5 py-3 bg-white hover:bg-gray-300 rounded-md ";
const active = "px-5 py-3 bg-[#E13427] text-white hover:opacity-90 rounded-md";

const PageNumber = ({ text, currentPage, icon, setCurrentPage, type }) => {
  const navigate = useNavigate();
  // console.log(currentPage);
  const handleChangePage = () => {
    if (!(text === "...")) {
      setCurrentPage(+text);
      navigate({
        pathname: "/",
        search: createSearchParams({
          page: text,
        }).toString(),
      });
    }
  };
  return (
    <div
      className={
        +text === +currentPage
          ? `${active} ${text === "..." ? "cursor-text" : "cursor-pointer"}`
          : `${notActive} ${text === "..." ? "cursor-text" : "cursor-pointer"}`
      }
      onClick={handleChangePage}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
