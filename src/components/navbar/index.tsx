import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logosvg.svg";
import { Button } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const data: string = localStorage.getItem("token") || "";

  return (
    <section className="navbar">
      <div className="w-[90%] m-auto flex items-center justify-between py-2">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-[40px]">
          <Link className="text-[22px] font-medium text-[#fff]" to={"/"}>
            Home
          </Link>
          <Link className="text-[22px] font-medium text-[#fff]" to={"/blog"}>
            Blog
          </Link>
          <Link className="text-[22px] font-medium text-[#fff]" to={"/more"}>
            More
          </Link>
          <Link className="text-[22px] font-medium text-[#fff]" to={"/cart"}>
            Cart
          </Link>
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center gap-[30px]">
              <IoSearchOutline className="text-[29px] text-[#fff] font-bold " />
              <FaShoppingCart className="text-[29px] text-[#fff] font-bold " />
            </div>
            <Button onClick={() => navigate("/auth")}>
              {data ? "User" : "Sign In"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
