import { Slider } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getNumberFromString } from "../utils/Common/getNumberFromString";
import icons from "../utils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name, handleSubmit, queries }) => {
  const { priceRanges, areaRanges } = useSelector((state) => state.app);

  const [priceRange, setPriceRange] = useState([20, 30]);
  const [priceRangeTitle, setPriceRangeTitle] = useState("2 - 3 triệu");
  const [areaRange, setAreaRange] = useState([20, 30]);
  const [areaRangeTitle, setAreaRangeTitle] = useState("20 - 30 m2");

  const handleChange = (event, newValue) => {
    if (name === "priceRange") {
      setPriceRange(newValue);
      setPriceRangeTitle(
        `${Math.round(newValue[0] * 0.15)} - ${Math.round(
          newValue[1] * 0.15
        )} triệu`
      );
    } else {
      setAreaRange(newValue);
      setAreaRangeTitle(
        `${Math.round(newValue[0] * 0.9)} - ${Math.round(newValue[1] * 0.9)} m2`
      );
    }
  };

  const marks = [
    [
      {
        value: 0,
        label: "0",
      },

      {
        value: 100,
        label: "15 triệu+",
      },
    ],
    [
      {
        value: 0,
        label: "0",
      },

      {
        value: 100,
        label: "90m2+",
      },
    ],
  ];

  //Xu li btn chon gia nhanh
  const handleQuickSelection = (item) => {
    if (name === "priceRange") {
      setPriceRange([
        item?.from / (0.15 * 1000000),
        item?.to / (0.15 * 1000000),
      ]);
      setPriceRangeTitle(item?.title);
    } else {
      setAreaRange([item?.from / 0.9, item?.to / 0.9]);
      setAreaRangeTitle(item?.title);
    }
  };

  // console.log(areaRangeTitle);

  const handleBeforeSubmit = (e) => {
    if (name === "priceRange") {
      handleSubmit(e, {
        [name]: {
          from: Math.round(priceRange[0] * (0.15 * 1000000)),
          to: Math.round(priceRange[1] * (0.15 * 1000000)),
        },
        [`${name}Title`]: priceRangeTitle,
      });
    } else {
      handleSubmit(e, {
        [name]: {
          from: Math.round(areaRange[0] * 0.9),
          to: Math.round(areaRange[1] * 0.9),
        },
        [`${name}Title`]: areaRangeTitle,
      });
    }
  };

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
        className="w-1/2 bg-white rounded-md"
      >
        {/* Button exit */}
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

        {/* Category and Province */}
        {(name === "category" || name === "province") && (
          <div className="p-4 select-none">
            {content?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="flex items-center gap-2  border-b border-gray-200"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item?.id}
                    value={item?.id}
                    checked={item.id === queries[`${name}Id`] ? true : false}
                    onChange={(e) =>
                      handleSubmit(e, {
                        [name]: item.title,
                        [`${name}Id`]: item.id,
                      })
                    }
                  />
                  <label className="w-full py-2" htmlFor={item.id}>
                    {item.title}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        {/* Prices and Area */}
        {(name === "priceRange" || name === "areaRange") && (
          <div className="p-4">
            <div className="text-center font-bold text-orange-500 text-xl">
              {/* {priceRange[0] === 100 || areaRange[0] === 100
                ? `Trên ${convert100ToPriceOrArea(
                    name === "priceRange" ? priceRange[0] : areaRange[0]
                  )} ${name === "priceRange" ? "triệu" : "m2"}`
                : `${convert100ToPriceOrArea(
                    name === "priceRange" ? priceRange[0] : areaRange[0]
                  )} - ${convert100ToPriceOrArea(
                    name === "priceRange" ? priceRange[1] : areaRange[1]
                  )} ${name === "priceRange" ? "triệu" : "m2"}`} */}
              {name === "priceRange" ? priceRangeTitle : areaRangeTitle}
            </div>

            <div className="px-5">
              <Slider
                getAriaLabel={() => "Prices and Areas range"}
                value={name === "priceRange" ? priceRange : areaRange}
                // value={priceRange}
                onChange={handleChange}
                valueLabelDisplay="off"
                step={1}
                size={"medium"}
                marks={name === "priceRange" ? marks[0] : marks[1]}
                className="font-bold"
              />
            </div>

            <div>
              <h4 className="font-medium mb-6">Chọn nhanh</h4>
              {(name === "priceRange" ? priceRanges : areaRanges).map(
                (item) => {
                  return (
                    <button
                      key={item.id}
                      onClick={(e) => handleQuickSelection(item)}
                      className="bg-primary  m-1 rounded-md px-2 py-1 select-none focus:bg-secondary1 focus:text-white"
                    >
                      {item.title}
                    </button>
                  );
                }
              )}

              {/* {name === "areaRange" &&
                areaRanges.map((item) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectArea(item.title)}
                      className="bg-primary  m-1 rounded-md px-2 py-1 select-none focus:bg-secondary1 focus:text-white"
                    >
                      {item.title}
                    </button>
                  );
                })} */}
            </div>
          </div>
        )}
        {(name === "priceRange" || name === "areaRange") && (
          <div>
            <button
              onClick={(e) => handleBeforeSubmit(e)}
              className="w-full rounded-bl-md rounded-br-md bg-orange-400 py-2 font-medium uppercase"
              type="button"
            >
              Áp dụng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
