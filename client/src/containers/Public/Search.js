import React, { useCallback, useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../utils/icons";
import { useSelector } from "react-redux";
import { getCodeArea, getCodePrice } from "../../utils/Common/getCodes";

const {
  BsChevronRight,
  RiCrop2Line,
  TbReportMoney,
  HiOutlineLocationMarker,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const [queries, setQueries] = useState({});

  const { provinces, prices, areas, categories } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  //Xu li submit
  const handleSubmit = useCallback(
    (e, query) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowModal(false);
    },
    [isShowModal, queries]
  );
  //moi lan render lai se tao 1 function moi nen phai dung useCallback den ngan chan dieu nay

  // console.log(queries);

  return (
    <div>
      <div className="h-[55px] w-4/5 mx-auto my-3 p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.category}
            defaultText={"Phòng trọ, nhà trọ"}
            fontWeight
          />
        </span>
        <span
          onClick={() => handleShowModal(provinces, "province")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.province}
            defaultText={"Toàn quốc"}
          />
        </span>
        <span
          onClick={() => handleShowModal(prices, "price")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.price}
            defaultText={"Chọn giá"}
          />
        </span>
        <span
          onClick={() => handleShowModal(areas, "area")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.area}
            defaultText={"Chọn diện tích"}
          />
        </span>
        <button
          type="button"
          className="outline-none py-2 px-4 text-sm bg-secondary1 rounded-md flex-1 flex items-center justify-center gap-2 text-white font-medium"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>

      {isShowModal && (
        <Modal
          handleSubmit={handleSubmit}
          content={content}
          name={name}
          queries={queries}
          setIsShowModal={setIsShowModal}
        />
      )}
    </div>
  );
};

export default Search;
