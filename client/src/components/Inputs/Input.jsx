import React from "react";

const Input = ({ value, onChange, label, placeholder, type }) => {
  return (
    <div>
      <label className="text-[13px] text-slate-800">
        {label}

        <div className="input-box">
          <input
            type={
              type == "password" ? (showPassword ? "text" : "password") : type
            }
            placeholder={placeholder}
            className="w-full bg-transparent outline-none"
            value={value}
            onChange={(e) => onchange(e)}
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
