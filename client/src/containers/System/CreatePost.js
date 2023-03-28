import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Address, Button, Overview } from "../../components";
import { apiCreatePost, apiUploadImages } from "../../services";
import { getRangeFromValue } from "../../utils/Common/getRangeFromValue";
import Swal from "sweetalert2";
const CreatePost = () => {
  const dispatch = useDispatch();
  const { priceRanges, areaRanges } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.user);

  //Lay data tat ca inputs
  const [payload, setPayload] = useState({
    title: "",
    price: "",
    area: "",
    images: "",
    address: "",
    categoryId: "",
    priceRangeId: "",
    areaRangeId: "",
    description: "",
    target: "",
    province: "",
  });

  const [imagePreview, setImagePreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Xu li up load hinh anh
  const handleUploadFiles = async (e) => {
    e.stopPropagation();
    let images = [];
    let files = e.target.files;
    setIsLoading(true);
    let formData = new FormData();
    for (const file of files) {
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );

      const response = await apiUploadImages(formData);

      // console.log(response);

      if (response.status === 200) {
        images = [...images, response?.data?.secure_url];
      }
    }

    setIsLoading(false);
    setImagePreview((prev) => [...prev, ...images]);
    setPayload((prev) => ({
      ...prev,
      images: [...prev?.images, ...images],
    }));
  };

  //Xu li xoa hinh anh
  const handleDeleteImage = (image) => {
    setImagePreview((prev) => prev?.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  const handleSubmit = async () => {
    let areaRangeId = getRangeFromValue(areaRanges, +payload?.area);
    let priceRangeId = getRangeFromValue(priceRanges, +payload?.price);

    let finalPayload = {
      ...payload,
      areaRangeId,
      priceRangeId,
      userId: currentUser?.id,
      target: payload?.target || "ALL",
    };

    console.log(finalPayload);

    const response = await apiCreatePost(finalPayload);
    console.log(response);
    if (response.status === 200) {
      Swal.fire("Thành công", "Tạo tin mới thành công", "success").then(() => {
        setPayload({
          title: "",
          price: "",
          area: "",
          images: "",
          address: "",
          categoryId: "",
          priceRangeId: "",
          areaRangeId: "",
          description: "",
          target: "",
          province: "",
        });
      });
    } else {
      Swal.fire("Oops", "Đã có lỗi xãy ra", "error");
    }
  };

  return (
    <div className="px-8">
      <h1 className="text-3xl py-4 border-b">Đăng tin mới</h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8  space-y-8 border">
          <Address setPayload={setPayload} />
          <Overview payload={payload} setPayload={setPayload} />
          <div className="w-full">
            <h2 className="font-bold text-2xl">Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className="w-full my-4">
              <label
                className=" flex flex-col gap-2 items-center justify-center border-2 border-gray-400 h-[200px] border-dashed rounded-md"
                htmlFor="file"
              >
                {/* <CircularProgress /> */}
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <>
                    <BsFillCameraFill color="blue" size={50} />
                    Thêm ảnh
                  </>
                )}
              </label>
              <input
                onChange={handleUploadFiles}
                hidden
                type="file"
                id="file"
                multiple
              />
            </div>
            <div>
              <h3 className="font-medium">Xem trước</h3>
              <div className="grid grid-cols-12 gap-4 w-full">
                {imagePreview?.map((item) => {
                  return (
                    <div key={item} className="relative col-span-4 ">
                      <img
                        className="rounded-md h-full w-full object-cover"
                        src={item}
                        alt="preview"
                      />
                      <span
                        onClick={() => handleDeleteImage(item)}
                        title="Xóa"
                        className="absolute top-1  right-1 p-2 cursor-pointer bg-gray-300  hover:bg-gray-400 rounded-full"
                      >
                        <MdDelete />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            textColor="text-white"
            text="Thêm mới"
            bgColor="bg-green-600"
            fullWidth
          />
        </div>
        <div className="col-span-4 border">
          <CircularProgress />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
