import React from "react";

const InputBox = ({ type, placeholder,name, getInputValue}) => {
  return (
    <div className=" w-[400px] m-3  hover:ring-blue-500">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e)=>getInputValue(e.target.name, e.target.value)}
        className="w-full max-w-md p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      />
    </div>
  );
};

export default InputBox;
