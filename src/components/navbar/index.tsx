import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logosvg.svg";
import { Button, Modal } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data: string = localStorage.getItem("token") || "";

  const handleClick = () => {
    if (data) {
      setIsModalOpen(true);
    } else {
      navigate("/auth");
    }
  };
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
            <Button onClick={handleClick}>{data ? "User" : "Sign In"}</Button>
          </div>
        </div>
      </div>
      <Modal
        title="Log out"
        open={isModalOpen}
        onOk={() => {
          localStorage.removeItem("token");
          setIsModalOpen(false);
          navigate("/auth");
        }}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Haqiqatan ham tizimdan chiqishni xohlaysizmi?</p>
      </Modal>
    </section>
  );
}

export default Navbar;
