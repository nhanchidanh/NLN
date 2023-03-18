import { Slider } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getNumberFromString } from "../utils/Common/getNumberFromString";
import icons from "../utils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name, handleSubmit, queries }) => {
  const { prices, areas } = useSelector((state) => state.app);
  //slide 2 ranges

  //Chuyển 100% về 15trieu
  const convert100ToPriceOrArea = (number) => {
    if (name === "price") {
      return Math.round(number * 0.15);
    } else {
      return Math.round(number * 0.9);
    }
  };
  //Chuyển 15 triệu về 100%
  const convertTo100 = (number) => {
    if (name === "price") {
      return Math.round(number / 0.15);
    } else {
      return Math.round(number / 0.9);
    }
  };

  // const [value, setPrice] = useState([convertTo100(3), convertTo100(5)]);
  const [price, setPrice] = useState([convertTo100(3), convertTo100(5)]);
  const [area, setArea] = useState([20 / 0.9, 30 / 0.9]);
  const handleChange = (event, newValue) => {
    if (name === "price") {
      setPrice(newValue);
    } else {
      setArea(newValue);
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
  const handleSelectPrice = (stringPrices) => {
    let arrNumber = getNumberFromString(stringPrices);

    if (arrNumber.length === 1) {
      if (arrNumber[0] === "1") {
        setPrice([0, convertTo100(arrNumber[0])]);
      } else if (arrNumber[0] === "15") {
        setPrice([convertTo100(15), convertTo100(arrNumber[0])]);
      }
    } else {
      setPrice([convertTo100(arrNumber[0]), convertTo100(arrNumber[1])]);
    }
  };
  //Xu li btn chon dien tich nhanh
  const handleSelectArea = (stringAreas) => {
    let arrNumber = getNumberFromString(stringAreas);

    if (arrNumber.length === 1) {
      if (arrNumber[0] === "20") {
        setArea([0, convertTo100(arrNumber[0])]);
      } else if (arrNumber[0] === "90") {
        setArea([convertTo100(90), convertTo100(arrNumber[0])]);
      }
    } else {
      setArea([convertTo100(arrNumber[0]), convertTo100(arrNumber[1])]);
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
                  key={item.code}
                  className="flex items-center gap-2  border-b border-gray-200"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item.code}
                    value={item.code}
                    checked={
                      item.code === queries[`${name}Code`] ? true : false
                    }
                    onClick={(e) =>
                      handleSubmit(e, {
                        [name]: item.value,
                        [`${name}Code`]: item.code,
                      })
                    }
                  />
                  <label className="w-full py-2" htmlFor={item.code}>
                    {item.value}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        {/* Prices and Area */}
        {(name === "price" || name === "area") && (
          <div className="p-4">
            <div className="text-center font-bold text-orange-500 text-xl">
              {price[0] === 100 || area[0] === 100
                ? `Trên ${convert100ToPriceOrArea(
                    name === "price" ? price[0] : area[0]
                  )} ${name === "price" ? "triệu" : "m2"}`
                : `${convert100ToPriceOrArea(
                    name === "price" ? price[0] : area[0]
                  )} - ${convert100ToPriceOrArea(
                    name === "price" ? price[1] : area[1]
                  )} ${name === "price" ? "triệu" : "m2"}`}
            </div>

            <div className="px-5">
              <Slider
                getAriaLabel={() => "Prices and Areas range"}
                value={name === "price" ? price : area}
                onChange={handleChange}
                valueLabelDisplay="off"
                step={0.5}
                size={"medium"}
                marks={name === "price" ? marks[0] : marks[1]}
                className="font-bold"
              />
            </div>

            <div>
              <h4 className="font-medium mb-6">Chọn nhanh</h4>
              {name === "price" &&
                prices.map((item) => {
                  return (
                    <button
                      key={item.code}
                      onClick={() => handleSelectPrice(item.value)}
                      className="bg-primary  m-1 rounded-md px-2 py-1 select-none focus:bg-secondary1 focus:text-white"
                    >
                      {item.value}
                    </button>
                  );
                })}

              {name === "area" &&
                areas.map((item) => {
                  return (
                    <button
                      key={item.code}
                      onClick={() => handleSelectArea(item.value)}
                      className="bg-primary  m-1 rounded-md px-2 py-1 select-none focus:bg-secondary1 focus:text-white"
                    >
                      {item.value}
                    </button>
                  );
                })}
            </div>
          </div>
        )}
        {(name === "price" || name === "area") && (
          <div>
            <button
              // onClick={handleSubmit}
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
