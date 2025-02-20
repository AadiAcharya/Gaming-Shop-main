import React from "react";
import cart1 from "../assets/cart1.png";

const cart = () => {
  return (
    <div className="flex mt-[60px]">
      <div className="flex  w-[805px] h-[681px] bg-bermuda-gray mt-5">
        <img className="w-[805px]" src={cart1} alt="Cart" />
      </div>
      <div className="flex flex-col justify-center pl-[129px] items-center">
        <div>
          <h1>Create an account</h1>
          <h5>Enter your details below</h5>
        </div>
        <div>
          <input type="Name" placeholder="Name" />
        </div>
        <div>
          <input type="text" placeholder="Email or Phone Number" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div>
          <button className="">
            <h2>Create Account</h2>
          </button>
        </div>
        <div>
          <button>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h2>Sign up with Google</h2>
              </div>
            </div>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default cart;
