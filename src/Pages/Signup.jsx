import React, { useState } from "react";
import InputBox from "../Components/InputBox";
import Button from "../Components/Button";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Signup = () => {
  const [loginData, setLoginData] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [flag, setFlag] = useState(false);
  const handleClick = async () => {
    setFlag(true);
    try {
      const response = await axios.post(
        "https://tour-companion-backend.onrender.com/user/register",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFlag(false);
      alert(response.data);
      setIsRegistered(true)
    } catch (error) {
      setFlag(false);
      console.log(error);
    }
  };
  if(isRegistered){
  return <Navigate to="/user/login" />;

}
  const getInputValue = (name, value) => {
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(loginData);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 columns-1 flex-col ">
      <div className="flex justify-center items-center bg-white columns-1 flex-col p-10 rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

        <InputBox
          type="text"
          placeholder="Enter your name"
          name="username"
          getInputValue={getInputValue}
        />
        <InputBox
          type="text"
          placeholder="Enter your email"
          name="email"
          getInputValue={getInputValue}
        />
        <InputBox
          type="password"
          placeholder="Enter your password"
          name="password"
          getInputValue={getInputValue}
        />
        <Button
          handlClick={handleClick}
          text={flag ? "Registering..." : "Register"}
        />
      </div>
    </div>
  );
};

export default Signup;
