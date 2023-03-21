import React, { memo } from "react";

const SelectAddressForm = ({
  label,
  options,
  value,
  setValue,
  type,
  reset,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="select-address" className="font-medium">
        {label}
      </label>
      <select
        id="select-address"
        name="select-address"
        className="outline-none border rounded-md p-2"
        value={reset ? "" : value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">{`--Chọn ${label}--`}</option>
        {options?.map((item) => {
          return (
            <option
              key={type === "province" ? item?.province_id : item?.district_id}
              value={
                type === "province" ? item?.province_id : item?.district_id
              }
            >
              {type === "province" ? item?.province_name : item?.district_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default memo(SelectAddressForm);
