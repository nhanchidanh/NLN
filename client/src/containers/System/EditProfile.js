import React, { useEffect, useState } from "react";
import anonAvatar from "../../assets/anon-avatar.png";
import { Button, InputFormSystem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { apiUpdateUser, apiUploadImages } from "../../services";
import validate from "../../utils/Common/validateFields";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getCurrentUser } from "../../store/actions";
const EditProfile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  const [invalidFields, setInvalidFields] = useState([]);

  const [payload, setPayload] = useState({
    fullName: currentUser?.fullName || "",
    phone: currentUser?.phone || "",
    email: currentUser?.email || "",
    avatar: currentUser?.avatar,
  });

  const handleSubmit = async () => {
    const invalidCounter = validate(payload, setInvalidFields);
    if (invalidCounter === 0) {
      const response = await apiUpdateUser(payload);
      // console.log(response);
      if (response?.status === 200) {
        Swal.fire("Thành công!", "Đã cập nhật thông tin!", "success").then(
          () => {
            dispatch(getCurrentUser());
          }
        );
      } else {
        Swal.fire("Thất bại", "Có lỗi xảy ra!", "error");
      }
    }
    // console.log(payload);
  };

  const handleUploadAvatar = async (e) => {
    const image = e.target?.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSETS_NAME);

    const response = await apiUploadImages(formData);

    if (response.status === 200) {
      setPayload((prev) => ({
        ...prev,
        avatar: response?.data?.secure_url,
      }));
    }
  };

  useEffect(() => {
    if (currentUser) {
      setPayload({
        fullName: currentUser?.fullName || "",
        phone: currentUser?.phone || "",
        email: currentUser?.email || "",
        avatar: currentUser?.avatar || "",
      });
    }
  }, [currentUser]);
  return (
    <div className="">
      <h1 className="text-3xl py-4 border-b">Thông tin cá nhân</h1>
      <div className="py-4 space-y-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <label className="font-medium" htmlFor="avatar">
            Ảnh đại diện
          </label>
          <img
            src={payload?.avatar || anonAvatar}
            alt="avatar"
            className="w-32 h-32 object-cover rounded-full"
          />
          <input
            onChange={(e) => handleUploadAvatar(e)}
            type="file"
            className="appearance-none"
            id="avatar"
          />
        </div>
        <div className="grid grid-cols-12 space-x-6">
          <div className="col-span-6 ">
            <InputFormSystem
              name={"fullName"}
              setValue={setPayload}
              label={"Tên hiển thị"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload?.fullName}
            />
            <InputFormSystem
              name={"phone"}
              setValue={setPayload}
              label={"Số điện thoại"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload?.phone}
            />
          </div>
          <div className="col-span-6 ">
            <InputFormSystem
              name={"email"}
              setValue={setPayload}
              label={"Email"}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload?.email}
            />
            <div className="flex flex-col gap-4">
              <label className="font-medium">Mật khẩu</label>
              <Link className="text-blue-500" to={"/"}>
                Đổi mật khẩu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Button
        fullWidth
        text={"Cập nhật"}
        bgColor={"bg-secondary1"}
        textColor={"text-white"}
        onClick={handleSubmit}
      ></Button>
    </div>
  );
};

export default EditProfile;
