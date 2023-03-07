import React, { memo } from "react";
import icons from "../utils/icons";
import { convertToSlug } from "../utils/Common/convertToSlug";
import {
  Link,
  createSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

const { MdNavigateNext } = icons;

const ItemSideBar = ({ title, content, isDoubleCol, type }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleFilterPosts = (code) => {
    // dispatch(actions.getPostsLimit({ [type]: code }));
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        [type]: code,
      }).toString(),
    });
  };
  return (
    <div className="p-4 bg-white rounded-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div
        className={`space-y-2 grid ${
          isDoubleCol ? "grid-cols-2" : "grid-cols-1"
        } `}
      >
        {content?.length > 0 &&
          content.map((item) => {
            return (
              <div
                onClick={() => handleFilterPosts(item.code)}
                // to={`${convertToSlug(item.value)}`}
                key={item.code}
                className=" flex gap-1  items-center cursor-pointer hover:text-orange-600 border-b border-gray-200 pb-1 border-dashed "
              >
                <MdNavigateNext color="#999" className="mt-[2px]" />
                <p>{item.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default memo(ItemSideBar);

//memo: giúp hạn chế re render. chỉ render khi prop truyền xuống bị thay đổi
