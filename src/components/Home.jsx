import iphone14 from "../assets/iphone14.png";
import apple from "../assets/apple.png";
import Time from "./Time";

const Home = () => {
  return (
    <div>
      <div className="flex  items-center w-full justify-between  pl-10 text-primary ">
        {/* Left Sidebar */}
        <div className="flex flex-col gap-1 text-[16px] leading-6 font-normal  min-h-[344px] ">
          <div className="flex items-center gap-2">
            <h2 className="text-lg ">Women Fashion</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              className="text-primary"
              viewBox="0 0 8 13"
              fill="currentColor"
            >
              <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">Men's Fashion</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="13"
              className="text-primary"
              viewBox="0 0 8 13"
              fill="currentColor"
            >
              <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" />
            </svg>
          </div>
          <h2 className="text-lg font-medium">Electronics</h2>
          <h2 className="text-lg font-medium">Home & Lifestyle</h2>
          <h2 className="text-lg font-medium">Medicine</h2>
          <h2 className="text-lg font-medium">Sports & Outdoor</h2>
          <h2 className="text-lg font-medium">Baby's & Toys</h2>
          <h2 className="text-lg font-medium">Groceries & Pets</h2>
          <h2 className="text-lg font-medium">Health & Beauty</h2>
        </div>

        {/* Vertical Divider */}

        <hr className="w-[384px] rotate-90 " />

        {/* Right Promo Section */}
        <div className="flex bg-black pl-6  text-secondary items-center gap-8">
          <div className="flex flex-col justify-center gap-4 flex-1">
            <div className="flex items-center gap-3  pl-6">
              <img src={apple} alt="Apple logo" className="w-8 h-8" />
              <h3 className="text-xl font-semibold">iPhone 14 Series</h3>
            </div>
            <h2 className="text-[48px] font-inter font-bold pl-6">
              Up to 10% <br /> off Voucher
            </h2>
            <div className="flex items-center gap-4">
              <button className="underline text-white">Shop now</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M1.5 8H18M18 8L11 1M18 8L11 15"
                  stroke="#1E2D3D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src={iphone14} alt="iPhone 14" className="h-72 w-auto" />
          </div>
        </div>
      </div>
      <Time duration={2 * 24 * 60 * 60 * 1000} />
    </div>
  );
};

export default Home;
