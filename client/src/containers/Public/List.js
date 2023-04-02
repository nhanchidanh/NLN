import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Item } from "../../components";
import { getPostsLimit } from "../../store/actions/post";
import { useSearchParams } from "react-router-dom";
import { truncateText } from "../../utils/Common/truncateText";
import { Pagination } from "@mui/material";

const List = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  // console.log(count);
  const [searchParams] = useSearchParams();

  const postRef = useRef();

  useEffect(() => {
    let params = [];

    for (let entry of searchParams.entries()) {
      params.push(entry);
    }

    let searchParamsObject = {};

    // eslint-disable-next-line array-callback-return
    params?.map((item) => {
      searchParamsObject = {
        ...searchParamsObject,
        [item[0]]: item[1],
      };
    });

    setPage(1);
    setFilter(searchParamsObject);
  }, [searchParams]);

  useEffect(() => {
    dispatch(getPostsLimit({ page, categoryId, ...filter }));
  }, [dispatch, page, categoryId, filter]);

  const handleChangePage = (value) => {
    postRef.current.scrollIntoView({ behavior: "smooth" });
    setPage(value);
  };
  return (
    <div ref={postRef}>
      <div className=" p-5 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        </div>
        <div className="flex items-center gap-1 my-2">
          <span>Sắp xếp:</span>
          <Button
            onClick={() => setFilter((prev) => ({ ...prev, isNew: 0 }))}
            bgColor={"bg-gray-200"}
            text="Mặc định"
          />
          <Button
            onClick={() => setFilter((prev) => ({ ...prev, isNew: 1 }))}
            bgColor={"bg-gray-200"}
            text="Mới nhất"
          />
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
      <div className="p-5 flex flex-col items-center ">
        <Pagination
          size="large"
          color="secondary"
          shape="rounded"
          page={page}
          onChange={(e, value) => handleChangePage(value)}
          hidePrevButton={true}
          hideNextButton={true}
          count={Math.ceil(count / process.env.REACT_APP_LIMIT_POSTS)}
        ></Pagination>
      </div>
    </div>
  );
};

export default List;
