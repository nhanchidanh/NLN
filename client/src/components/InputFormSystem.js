import React from "react";

const InputFormSystem = ({ label, unit, value, setValue, name, small }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium" htmlFor="title">
        {label}
      </label>
      <div className="flex items-center">
        <input
          id="title"
          type="text"
          className={`flex-auto ${
            unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"
          } border p-2 outline-none`}
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
        />
        {unit && (
          <span className="p-2 bg-gray-200 text-center w-16 border rounded-tr-md rounded-br-md">
            {unit}
          </span>
        )}
      </div>
      {small && <small className="text-red-400">{small}</small>}
    </div>
  );
};

export default InputFormSystem;
