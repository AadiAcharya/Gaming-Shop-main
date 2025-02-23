import { Link } from "react-router-dom";
import cart1 from "../assets/cart1.png";
import gicon from "../assets/gicon.png";
import Login from "./Login";

const SignUp = () => {
  return (
    <div className="flex mt-[60px]">
      <div className="flex  w-[805px] h-[581px] bg-bermuda-gray mt-5">
        <img className="w-[805px]" src={cart1} alt="Cart" />
      </div>
      <div className="flex flex-col pl-[129px] items-start">
        <div className="gap-[24px] flex flex-col  ">
          <h1 className="text-[36px] text-royal font-medium leading-7 ">
            Create an account
          </h1>
          <h5 className="text-[16px] leading-[24px]   ">
            Enter your details below
          </h5>
        </div>
        <div className="pt-[48px] flex flex-col font-normal gap-[40px]  ">
          <div className="border-b-2 border-[#E5E5E5] w-[370px]">
            <input type="Name" placeholder="Name" />
          </div>
          <div className="border-b-2 border-[#E5E5E5] w-[370px]">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="border-b-2 border-[#E5E5E5] w-[370px]">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div>
          <button className="bg-red-600 text-white w-[371px] h-[56px] mt-[40px] rounded-[10px] p-[16px, 122px] ">
            <h2 className="text-[16px] font-medium leading-6 ">
              Create Account
            </h2>
          </button>
        </div>
        <div className="mt-[16px]  ">
          <button className="flex gap-[16px] w-[371px] justify-center items-center h-[56px] rounded-[10px] p-[16px, 122px] bg-white border-2 gap-[16px] ">
            <img src={gicon} alt="" />
            <h2>Sign up with Google</h2>
          </button>
        </div>
        <div className="flex  items-center gap-[16px] mt-[32px]">
          <h2 className="text-[16px] leading-[24px]  ">
            Already have an account?{" "}
          </h2>
          <span className="text-red-500 underline">
            <Link to="/Login">Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
