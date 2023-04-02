import React, { useCallback, useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCodeArea, getCodePrice } from "../../utils/Common/getCodes";
import { getPostsLimit } from "../../store/actions";

const {
  BsChevronRight,
  RiCrop2Line,
  TbReportMoney,
  HiOutlineLocationMarker,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const [queries, setQueries] = useState({});

  const { provinces, priceRanges, areaRanges, categories } = useSelector(
    (state) => state.app
  );
  // console.log(priceRanges);

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  //Xu li submit
  const handleSubmit = useCallback((e, query) => {
    e.stopPropagation();
    setQueries((prev) => ({ ...prev, ...query }));
    setIsShowModal(false);
  }, []);

  const handleSearch = () => {
    const lastQueries = {
      categoryId: queries?.categoryId || "",
      province: queries?.province || "",
      priceRangeStart: queries?.priceRanges?.from || "",
      priceRangeEnd: queries?.priceRanges?.to || "",
      areaRangeStart: queries?.areaRanges?.from || "",
      areaRangeEnd: queries?.areaRanges?.to || "",
    };
    console.log("Search", lastQueries);

    dispatch(getPostsLimit(lastQueries));
  };
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
            defaultText={"Danh mục cho thuê"}
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
          onClick={() => handleShowModal(priceRanges, "priceRange")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.priceRangeTitle}
            defaultText={"Chọn giá"}
          />
        </span>
        <span
          onClick={() => handleShowModal(areaRanges, "areaRange")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text={queries.areaRangeTitle}
            defaultText={"Chọn diện tích"}
          />
        </span>
        <button
          type="button"
          onClick={handleSearch}
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
