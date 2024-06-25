import React, { useState } from "react";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const handleClick = () => {

    console.log(loginData)
  };

  const getInputValue = (name, value) => {
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 columns-1 flex-col ">
      <div className="flex justify-center items-center bg-white columns-1 flex-col p-10 rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <InputBox
          type="text"
          placeholder="Enter your name"
          name="email"
          getInputValue={getInputValue}
        />
        <InputBox
          type="text"
          placeholder="Enter your password"
          name="password"
          getInputValue={getInputValue}
        />
        <Button handlClick={handleClick} />
      </div>
    </div>
  );
};

export default Login;
