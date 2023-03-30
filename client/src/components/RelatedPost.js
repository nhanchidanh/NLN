import React, { useEffect } from "react";
import SubItem from "./SubItem";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const RelatedPost = () => {
  //Lay data tu redux
  const { newPosts } = useSelector((state) => state.post);
  // console.log(newPosts);

  //Dung useEffect de goi api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getNewPosts());
  }, []);

  return (
    <div className="border bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>

      <div className="">
        {newPosts?.map((item) => {
          // console.log(JSON.parse(item.images.image)[0]);
          return (
            <SubItem
              key={item.id}
              title={item.title}
              image={item?.images[0]}
              price={item?.price}
              createdAt={item.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPost;
