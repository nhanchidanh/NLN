import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Item } from "../../components";
import { getPostsLimit } from "../../store/actions/post";
import { useSearchParams } from "react-router-dom";
import { truncateText } from "../../utils/Common/truncateText";

const List = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  // console.log(posts);
  const [searchParams] = useSearchParams();
  // console.log(categoryId);

  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }

    let searchParamsObject = {};
    if (categoryId) searchParamsObject.categoryId = categoryId;

    params?.map((item) => {
      searchParamsObject = { ...searchParamsObject, [item[0]]: item[1] };
    });
    // console.log(searchParamsObject);

    dispatch(getPostsLimit(searchParamsObject));
  }, [searchParams, categoryId]);

  return (
    <div className=" p-5 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
      </div>
      <div className="flex items-center gap-1 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor={"bg-gray-200"} text="Mặc định" />
        <Button bgColor={"bg-gray-200"} text="Mới nhất" />
      </div>
      <div>
        {posts.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                price={item?.price}
                area={item?.area}
                description={item?.description}
                images={item?.images}
                star={5}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
