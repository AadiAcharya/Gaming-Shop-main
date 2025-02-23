import React from "react";
import cart1 from "../assets/cart1.png";

const Login = () => {
  return (
    <div className="flex items-center mt-[60px]">
      <div className="flex  w-[805px] h-[581px] bg-bermuda-gray mt-5">
        <img className="w-[805px]" src={cart1} alt="Cart" />
      </div>
      <div className="flex flex-col pl-[129px] items-start">
        <div className="gap-[24px] flex flex-col  ">
          <h1 className="text-[36px] text-royal font-medium leading-7 ">
            Log in to Exclusive
          </h1>
          <h5 className="text-[16px] leading-[24px]   ">
            Enter your details below
          </h5>
        </div>
        <div className="pt-[48px] flex flex-col font-normal gap-[40px]  ">
          <div className="border-b-2 border-[#E5E5E5] w-[370px]">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="border-b-2 border-[#E5E5E5] w-[370px]">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div className="flex items-center gap-[87px] mt-[32px]">
          <button className="bg-red-600 text-white w-[143px] h-[56px] rounded-[10px]  ">
            <h2 className="text-[16px] font-medium leading-6 ">
              Log in
            </h2>
          </button> 
          <h2 className="text-red-600 underline">Forget password?</h2>

          </div>
      </div>
    </div>
  );
};

export default Login;
