import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const h3Style = "text-[19px] font-medium text-[#FFF]";
  return (
    <section className="bg-[#6b3529] mt-[60px] ">
      <div className="w-[90%] m-auto py-[60px] flex items-start justify-between">
        <div className="flex flex-col gap-4">
          <Link to={""} className={h3Style}>
            FAQ
          </Link>
          <Link to={""} className={h3Style}>
            Shipping & Returns Policy
          </Link>
          <Link to={""} className={h3Style}>
            About Us
          </Link>
          <Link to={""} className={h3Style}>
            Terms and Conditions
          </Link>
          <div className="flex items-center justify-between mt-7">
            <button className="bg-[#fff] border-none w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <AiFillInstagram className="text-pink-500 text-[24px]" />
            </button>
            <button className="bg-[#fff] border-none w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <FaTelegramPlane className="text-blue-500 text-[24px]" />
            </button>
            <button className="bg-[#fff] border-none w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <AiFillYoutube className="text-red-500 text-[24px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <h3 className={h3Style}>Stay Updated</h3>
          <form className="w-[500px] h-[40px] border-[1px] border-[#FFF] rounded-md flex">
            <input
              className="border-none text-[#FFF] outline-none w-[80%] h-full bg-transparent pl-2"
              type="text"
              placeholder="Your email..."
            />
            <button className="bg-green-600 text-[#FFF] h-full text-[14px] w-[20%] rounded-r-md border-none outline-none">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Footer;
