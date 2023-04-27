import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import FormEditCate from "../../components/FormEditCate";
import { getCategories } from "../../store/actions";
import { apiUpdateCategory } from "../../services";
import Swal from "sweetalert2";

const ManageMenu = () => {
  const dispatch = useDispatch();
  const [selectCateEdit, setSelectCateEdit] = useState({});

  const handleSubmit = async (data) => {
    console.log("data update", data);
    const response = await apiUpdateCategory(data);

    if (response?.status === 200) {
      setSelectCateEdit({});

      Swal.fire("Thành công!", "Đã cập nhật thông tin!", "success").then(() => {
        dispatch(getCategories());
      });
    } else {
      Swal.fire("Thất bại", "Có lỗi xảy ra!", "error");
    }
  };

  const handleOnClickEdit = (cate) => {
    setSelectCateEdit(cate);
  };

  const { categories } = useSelector((state) => state.app);
  // console.log(categories);
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4">Quản lý danh mục</h1>
      <div className="w-full">
        <table className="w-full table-auto border border-separate border-spacing-0 rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 bg-gray-100">STT</th>
              <th className="border p-2 bg-gray-100">Tiêu đề</th>
              <th className="border p-2 bg-gray-100">Header</th>
              <th className="border p-2 bg-gray-100">Subheader</th>
              <th className="border p-2 bg-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((item, index) => (
              <tr key={item?.id} className="text-center">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item?.title}</td>

                <td className="border p-2">{item?.header}</td>
                <td className="border p-2">{item?.subheader}</td>
                <td className="border p-2">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <button
                      onClick={() => handleOnClickEdit(item)}
                      className="p-2 bg-blue-500 rounded-md "
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      // onClick={() => handleDeletePost(item?.id)}
                      className="p-2 bg-red-500 rounded-md "
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {Object.keys(selectCateEdit).length > 0 && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSelectCateEdit({});
          }}
          className="absolute flex top-0 right-0 left-0 bottom-0 bg-overlay-30 "
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-1100 bg-white m-auto pb-5"
          >
            <FormEditCate
              title={"Cập nhật danh mục"}
              payload={selectCateEdit}
              setPayload={setSelectCateEdit}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMenu;
