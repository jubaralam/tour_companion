import React from "react";

const Button = ( {handlClick, text}) => {
  return (
    <div>
      {" "}
      <button onClick={handlClick} className="w-full py-2 px-10 m-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {text}
      </button>
    </div>
  );
};

export default Button;
