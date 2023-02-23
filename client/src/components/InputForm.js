import React, { memo } from "react";

const InputForm = ({
  label,
  value,
  setValue,
  type,
  invalidFields,
  setInvalidFields,
}) => {
  return (
    <div>
      <label className="text-xs" htmlFor="phone">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
        onFocus={() => setInvalidFields([])}
      />
      {/* Show invalid Field:: some-every=>true/false find-filter=>value/null */}
      {invalidFields.length > 0 &&
        invalidFields.some((item) => item.name === type) && (
          <small className="text-red-500 italic">
            {invalidFields.find((item) => item.name === type)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);
