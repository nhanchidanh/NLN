import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import convertToMillion from "../../utils/Common/convertToMillion";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteByUserId } from "../../store/actions";
import { convertToSlug } from "../../utils/Common/convertToSlug";
import { Link } from "react-router-dom";

const FavoritePost = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.post);
  const { currentUser } = useSelector((state) => state.user);

  // console.log(favorites);

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) return;

    dispatch(getFavoriteByUserId({ userId: currentUser.id }));
  }, [dispatch, currentUser]);
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4 ">Danh sách tin yêu thích</h1>

      <div className="w-full">
        <table className="w-full table-auto border border-separate border-spacing-0 rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 bg-gray-100">STT</th>
              <th className="border p-2 bg-gray-100">Ảnh đại diện</th>
              <th className="border p-2 bg-gray-100">Tiêu đề</th>
              <th className="border p-2 bg-gray-100">Giá </th>
              <th className="border p-2 bg-gray-100">Diện tích</th>

              <th className="border p-2 bg-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {favorites?.length === 0 ? (
              <tr className="text-center">
                <td colSpan={7}>Bạn chưa có tin đăng yêu thích nào!</td>
              </tr>
            ) : (
              favorites?.map((item, index) => {
                return (
                  <tr key={item?.post?.id} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2 flex items-center justify-center">
                      <Link
                        to={`/chi-tiet/${convertToSlug(
                          item?.post?.title?.replaceAll("/", "-")
                        )}/${item?.post?.id}`}
                      >
                        <img
                          className="h-20 w-20 object-cover rounded-md"
                          src={
                            item?.post?.images.find(
                              (item) => item?.url !== null
                            )?.url
                          }
                          alt="post"
                        />
                      </Link>
                    </td>
                    <td className="border p-2">
                      {
                        <Link
                          to={`/chi-tiet/${convertToSlug(
                            item?.post?.title?.replaceAll("/", "-")
                          )}/${item?.post?.id}`}
                        >
                          {item?.post?.title}
                        </Link>
                      }
                    </td>
                    <td className="border p-2">
                      {convertToMillion(item?.post?.price)}
                    </td>
                    <td className="border p-2">{item?.post?.area + "m²"}</td>

                    <td className="border p-2">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <button
                          // onClick={() => handleDeletePost(item?.id)}
                          className="p-2 bg-red-500 rounded-md "
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritePost;
