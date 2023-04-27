import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getAreaRanges } from "../../store/actions";
import FormEditRange from "../../components/FormEditRange";
import { apiUpdateAreaRange } from "../../services";

const ManageArea = () => {
  const dispatch = useDispatch();
  const [selectRangeEdit, setSelectRangeEdit] = useState({});

  const handleSubmit = async (data) => {
    console.log("data update", data);
    const response = await apiUpdateAreaRange(data);

    if (response?.status === 200) {
      setSelectRangeEdit({});

      Swal.fire("Thành công!", "Đã cập nhật thông tin!", "success").then(() => {
        dispatch(getAreaRanges());
      });
    } else {
      Swal.fire("Thất bại", "Có lỗi xảy ra!", "error");
    }
  };

  const handleOnClickEdit = (item) => {
    setSelectRangeEdit(item);
  };

  const { areaRanges } = useSelector((state) => state.app);
  // console.log(areaRanges);
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4">Quản lý khoảng diện tích</h1>
      <div className="w-full">
        <table className="w-full table-auto border border-separate border-spacing-0 rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 bg-gray-100">STT</th>
              <th className="border p-2 bg-gray-100">Tiêu đề</th>
              <th className="border p-2 bg-gray-100">Từ</th>
              <th className="border p-2 bg-gray-100">Đến</th>
              <th className="border p-2 bg-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {areaRanges?.map((item, index) => (
              <tr key={item?.id} className="text-center">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item?.title}</td>

                <td className="border p-2">{item?.from}</td>
                <td className="border p-2">{item?.to}</td>
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

      {Object.keys(selectRangeEdit).length > 0 && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSelectRangeEdit({});
          }}
          className="absolute flex top-0 right-0 left-0 bottom-0 bg-overlay-30 "
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-1100 bg-white m-auto pb-5"
          >
            <FormEditRange
              title={"Cập nhật khoảng giá"}
              payload={selectRangeEdit}
              setPayload={setSelectRangeEdit}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageArea;
