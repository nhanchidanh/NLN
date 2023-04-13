import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"; //tra ve isactive
import * as actions from "../../store/actions";
import { convertToSlug } from "../../utils/Common/convertToSlug";

const notActive =
  "hover:bg-secondary2 transition-all px-4 h-full flex items-center bg-secondary1";
const active =
  "hover:bg-secondary2 transition-all px-4 h-full flex items-center bg-secondary2";

const Navigation = ({ isAdmin }) => {
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);

  return (
    <div
      className={`w-full flex justify-center items-center h-[40px] bg-secondary1 text-white`}
    >
      <div
        className={` ${
          isAdmin ? "w-full" : "w-4/5"
        }  flex h-full  text-sm font-medium`}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div key={item.id} className="h-full">
                <NavLink
                  to={`/${convertToSlug(item?.title)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item?.title}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
