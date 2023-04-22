import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { apiGetUsers } from "../../services/user";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await apiGetUsers();
      // console.log(response?.data?.response);
      if (response?.status === 200) {
        setUsers(response?.data?.response);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4">Quản lý người dùng</h1>
      <div className="w-full">
        <table className="w-full table-auto border border-separate border-spacing-0 rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 bg-gray-100">STT</th>
              <th className="border p-2 bg-gray-100">Họ và tên</th>
              <th className="border p-2 bg-gray-100">Ảnh đại diện</th>
              <th className="border p-2 bg-gray-100">Email</th>
              <th className="border p-2 bg-gray-100">Số điện thoại</th>
              <th className="border p-2 bg-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => (
              <tr key={item?.id} className="text-center">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item?.fullName}</td>
                <td className="border p-2 flex items-center justify-center">
                  <img
                    className="h-20 w-20 object-cover rounded-md"
                    src={item?.avatar}
                    alt="avatar"
                  />
                </td>
                <td className="border p-2">{item?.email}</td>
                <td className="border p-2">{item?.phone}</td>
                <td className="border p-2">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <button
                      // onClick={() => {
                      //   dispatch(actions.editDate(item));
                      //   setIsEdit(true);
                      // }}
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
    </div>
  );
};

export default ManageUser;
