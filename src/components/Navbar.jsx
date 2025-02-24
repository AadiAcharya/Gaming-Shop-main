import { Link } from "react-router-dom";
import search from "../assets/search.png";
import Wishlist from "../assets/Wishlist.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around text-gray-500 bg-orange-300 h-[92px] items-center">
        <div className="text-2xl ">EXCLUSIVE</div>
        <div className="flex justify-between gap-15 text-xl">
          <div className=" hover:text-blue-400">
            <Link to="/"> Home</Link>
          </div>
          <div className=" hover:text-blue-400">
            {" "}
            <Link to="/contact">Contact</Link>
          </div>
          <div className=" hover:text-blue-400">
            {" "}
            <Link to="/about">About</Link>
          </div>
          <div className=" hover:text-blue-400">
            {" "}
            <Link to="/signup">Sign up</Link>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex items-center bg-gray-400 p-[7px, 12px, 7px 20px] outline-primary rounded-md  gap-[34px]  max-w-xs">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow outline-none max-w-[150px] text-[12px]  font-normal placeholder-gray-500 bg-transparent"
            />
            <img src={search} alt="Search icon" className="h-5 w-5" />
          </div>

          <div>
            <img src={Wishlist} alt="" />
          </div>
          <div>
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-primary   " />
    </div>
  );
};

export default Navbar;
