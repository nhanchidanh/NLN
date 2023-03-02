import React, { useEffect, useState } from "react";
import { PageNumber } from "../../components";
import { useSelector } from "react-redux";
import icons from "../../utils/icons";

const { GrLinkNext, GrLinkPrevious } = icons;

const Pagination = ({ page }) => {
  const { count, posts } = useSelector((state) => state.post); //count: tổng số post, posts: data 5 posts
  const [arrPage, setArrPage] = useState([]); //Luu mang cac page: 1,2,3,..
  const [currentPage, setCurrentPage] = useState(+page || 1);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);

  useEffect(() => {
    let maxPage = Math.floor(count / posts.length);
    // console.log("maxpage", maxPage);

    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    // console.log("end", end);

    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    // console.log("start", start);

    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);

    currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false);
    currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false);
  }, [count, posts, currentPage]); //khi count hoặc posts thay đổi thì sẽ cập nhật lại maxPage

  return (
    <div className="flex items-center justify-center py-5 gap-4">
      {!isHideStart && (
        <PageNumber
          icon={<GrLinkPrevious />}
          text={1}
          setCurrentPage={setCurrentPage}
        />
      )}
      {!isHideStart && <PageNumber text={"..."} />}
      {arrPage.length > 0 &&
        arrPage.map((item) => {
          return (
            <PageNumber
              key={item}
              text={item}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          );
        })}

      {!isHideEnd && <PageNumber text={"..."} />}
      {!isHideEnd && (
        <PageNumber
          icon={<GrLinkNext />}
          text={Math.floor(count / posts.length)}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Pagination;
