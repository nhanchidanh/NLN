import React from "react";

const InputFormSystem = ({ label, unit }) => {
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
        />
        {unit && (
          <span className="p-2 bg-gray-200 text-center w-16 border rounded-tr-md rounded-br-md">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputFormSystem;
