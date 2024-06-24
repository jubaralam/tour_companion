import React from "react";

const InputBox = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className=" w-lg	 border-2 rounded-md m-2 py-1 px-3 	"
      />
    </div>
  );
};

export default InputBox;
