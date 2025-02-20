import { Link } from "react-router-dom";
import search from "../assets/search.png";
import Wishlist from "../assets/Wishlist.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around text-primary  h-[92px] items-center">
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
          <div className="flex items-center border  outline-primary rounded-md  gap-2  max-w-xs">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow outline-none text-sm placeholder-gray-500 bg-transparent"
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
