import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; //tra ve isactive
import { apiGetCategories } from "../../services/category";
import { convertToSlug } from "../../utils/Common/convertToSlug";

const notActive =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary2";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategoies = async () => {
      const response = await apiGetCategories();
      if (response?.data?.err === 0) {
        setCategories(response?.data?.response);
      }
    };
    fetchCategoies();
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-[40px] bg-secondary1 text-white">
      <div className="w-4/5 flex h-full items-center text-sm font-medium">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div key={item.code} className="h-full">
                <NavLink
                  to={convertToSlug(item.value)}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
