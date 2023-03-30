import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { convertToSlug } from "../utils/Common/convertToSlug";
import { getDistrictProvince } from "../utils/Common/getDistrictProvince";
import { truncateText } from "../utils/Common/truncateText";
import icons from "../utils/icons";
import anonAvatar from "../assets/anon-avatar.png";

const { GrStar, RiHeartLine, RiHeartFill } = icons;

const Item = ({
  address,
  description,
  price,
  area,
  images,
  star,
  title,
  user,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  // const navigate = useNavigate();
  // console.log(images);
  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++) {
      stars.push(
        <GrStar className="inline-block mb-1" size={18} color="orange" />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-row w-full gap-3 py-4 border-t border-orange-600">
      <div className="w-full basis-2/5 relative cursor-pointer">
        <Link to={`chi-tiet/${convertToSlug(title)}/${id}`}>
          <img
            src={images[0]?.url}
            alt="preview"
            className="w-full rounded-md h-[250px] block object-cover "
          />
        </Link>

        <span className="bg-overlay-70 text-white py-1 px-2 rounded-md absolute bottom-1 left-1">
          {`${images.length} ảnh`}
        </span>
        <span
          className=" text-white rounded-md absolute bottom-1 right-1"
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
            {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </div>
        </div>

        <div className="flex items-center my-2 justify-between">
          <span className="font-bold text-green-600">{price + " đồng"}</span>
          <span>{area + "m2"}</span>
          <span>{getDistrictProvince(address)}</span>
        </div>
        <p className="text-gray-500">{truncateText(description, 180)}</p>
        <div className="flex items-center mt-4 justify-between">
          <div className="flex items-center gap-1">
            <img
              src={anonAvatar}
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full "
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-blue-700 text-white py-1 px-2 rounded-md">
              {`Gọi ${user?.phone}`}
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
