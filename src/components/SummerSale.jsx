import down from "../assets/down.png"

const Sale = () => {
  return (
    <div className="m-4 text-white font-royal  bg-black flex justify-around h-[48px]  ">
      <div className="flex justify-center items-center gap-5">
      <h2>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!

      </h2>
      <button className="hover:bg-gray-900 hover:text-gray-400 underline ">Shop now</button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <h2>English</h2>
        <img src={down}  alt="" />
      </div>
    </div>
  );
};

export default Sale;
