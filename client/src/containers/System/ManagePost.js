import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { Pagination } from "@mui/material";

const ManagePost = () => {
  const dispatch = useDispatch();
  const { postsOfUser, count } = useSelector((state) => state.post);
  const { currentUser } = useSelector((state) => state.user);
  console.log(postsOfUser, count);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(actions.getPostsLimitByUserId({ page }));
  }, [dispatch, page]);

  const handleChangePage = (value) => {
    // postRef.current.scrollIntoView({ behavior: "smooth" });
    setPage(value);
  };

  return (
    <div className="px-8">
      <div className="flex items-center justify-between w-full border-b">
        <h1 className="text-3xl py-4 ">Quản lý bài đăng</h1>
        <div>
          <select
            className="outline-none rounded-md border border-gray-300 p-2"
            name=""
            id=""
          >
            <option value="">Lọc theo trạng thái</option>
            <option value="SHOW">Tin đang hiển thị</option>
            <option value="HIDE">Tin đang ẩn</option>
          </select>
        </div>
      </div>

      <div className="w-full">
        <table className="w-full table-auto border-collapse border ">
          <thead>
            <tr>
              <th className="border p-2">Mã tin</th>
              <th className="border p-2">Ảnh đại diện</th>
              <th className="border p-2">Tiêu đề</th>
              <th className="border p-2">Giá</th>
              <th className="border p-2">Diện tích</th>
              <th className="border p-2">Trạng thái</th>
              {currentUser?.role === "admin" && (
                <th className="border p-2">Thao tác</th>
              )}
            </tr>
          </thead>
          <tbody>
            {!postsOfUser ? (
              <tr>
                <td>Bạn chưa có tin đăng nào</td>
              </tr>
            ) : (
              postsOfUser?.map((item) => {
                return (
                  <tr key={item?.id} className="text-center">
                    <td className="border p-2">{item?.id}</td>
                    <td className="border p-2 flex items-center justify-center">
                      <img
                        className="h-20 w-20 object-cover rounded-md"
                        src={item?.images[0]?.url}
                        alt="post"
                      />
                    </td>
                    <td className="border p-2">{item?.title}</td>
                    <td className="border p-2">{item?.price}</td>
                    <td className="border p-2">{item?.area}</td>
                    <td className="border p-2">{item?.status}</td>
                    {currentUser?.role === "admin" && (
                      <td className="border p-2">button</td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
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

export default ManagePost;
