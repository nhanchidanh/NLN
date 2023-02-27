import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { getPosts } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
const List = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  // console.log(posts);
  return (
    <div className=" p-5 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 12/08/2022</span>
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
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
