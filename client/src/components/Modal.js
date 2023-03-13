import React from "react";
import icons from "../utils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name }) => {
  return (
    <div
      onClick={() => {
        setIsShowModal(false);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-10 flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-1/3 bg-white rounded-md"
      >
        <div className="h-[45px]  flex items-center p-3 border-b border-gray-200">
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsShowModal(false);
            }}
            className="cursor-pointer"
          >
            <GrLinkPrevious />
          </span>
        </div>
        {(name === "category" || name === "province") && (
          <div className="p-4 select-none">
            {content?.map((item) => {
              return (
                <div
                  key={item.code}
                  className="flex items-center gap-2  border-b border-gray-200"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item.code}
                    value={item.code}
                  />
                  <label className="w-full py-2" htmlFor={item.code}>
                    {item.value}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        {(name === "price" || name === "area") && (
          <div className="p-4">input range</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
