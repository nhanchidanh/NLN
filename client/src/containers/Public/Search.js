import React from "react";
import { SearchItem } from "../../components";
import icons from "../../utils/icons";

const {
  BsChevronRight,
  RiCrop2Line,
  TbReportMoney,
  HiOutlineLocationMarker,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  return (
    <div className="h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2">
      <SearchItem
        IconBefore={<MdOutlineHouseSiding />}
        IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text="Phòng trọ, nhà trọ"
        fontWeight
      />
      <SearchItem
        IconBefore={<HiOutlineLocationMarker />}
        IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text="Toàn quốc"
      />
      <SearchItem
        IconBefore={<TbReportMoney />}
        IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text="Chọn giá"
      />
      <SearchItem
        IconBefore={<RiCrop2Line />}
        IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
        text="Chọn diện tích"
      />
      <button
        type="button"
        className="outline-none py-2 px-4 text-xs bg-secondary1 rounded-md w-full flex items-center justify-center gap-2 text-white font-medium"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
