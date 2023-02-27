import React, { memo, useState } from "react";
import icons from "../utils/icons";

const { GrStar, RiHeartLine, RiHeartFill } = icons;
const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/507ce676-0681-4fe6-bac3-55a7eef70fc3_1656803285.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/f6480ee4-11fc-453b-882b-25f03a2bd77e_1656803279.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/1b8acfac-f2ef-40c1-962a-d3343d29aca6_1656803278.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/1af022b3-1701-4eae-9135-0c56a334a015_1656803279.jpg",
];

const Item = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  return (
    <div className="flex flex-row w-full gap-3 py-4 border-t border-orange-600">
      <div className="w-full basis-2/5 relative cursor-pointer">
        <img
          src={images[0]}
          alt="preview"
          className="w-full rounded-md h-[250px] block object-cover "
        />
        <span className="bg-overlay-70 text-white py-1 px-2 rounded-md absolute bottom-1 left-1">
          4 ảnh
        </span>
        <span
          className=" text-white  rounded-md absolute bottom-1 right-1"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill size={24} color="red" />
          ) : (
            <RiHeartLine size={24} />
          )}
        </span>
      </div>
      <div className="w-full basis-3/5">
        <div>
          <div className="text-red-600 font-semibold">
            <GrStar className="inline-block mb-1" size={18} color="orange" />
            <GrStar className="inline-block mb-1" size={18} color="orange" />
            <GrStar className="inline-block mb-1" size={18} color="orange" />
            <GrStar className="inline-block mb-1" size={18} color="orange" />
            <GrStar
              className="inline-block mb-1 mr-1"
              size={18}
              color="orange"
            />
            CHO THUÊ PHÒNG TRỌ CHO THUÊ PHÒNG TRỌ CHO THUÊ PHÒNG TRỌ
          </div>
        </div>

        <div className="flex items-center my-2 justify-between">
          <span className="font-bold text-green-600">4 triệu/tháng</span>
          <span>39m²</span>
          <span>Quận 9, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-500">
          PHÒNG TRỌ 24 SƠN KỲ TÂN PHÚ, GẦN ĐH CÔNG NGHỆ THỰC PHẨM- Cách trường
          Đại Học Công nghệ Thực Phẩm 700m, cách AeOnMall Tân Phú 500m, Gần
          eTown, PanDoRa…
        </p>
        <div className="flex items-center mt-4 justify-between">
          <div className="flex items-center gap-1">
            <img
              src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full "
            />
            <p>Chí Danh</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-blue-700 text-white py-1 px-2 rounded-md">
              Gọi 9045115260
            </button>
            <button className="text-blue-700 py-1 px-2 rounded-md border border-blue-700 ">
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
