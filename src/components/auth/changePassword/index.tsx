import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginType } from "../../../types";
import { useAxios } from "../../../hooks/axios";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import notificationApi from "../../../generic/notificition";

function ChangePassword() {
  const axios = useAxios();
  const navigate = useNavigate();
  const notify = notificationApi();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const labelStyle = "text-[17px] font-medium text-[#9c6559]";

  // login start

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const getData = (e: React.FormEvent) => {
    e.preventDefault();

    const data: LoginType = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      notify({ type: "full" });
      return;
    }

    if (!validateEmail(email)) {
      notify({ type: "forma" });
      return;
    }
    setLoading(true);

    axios({
      url: "/change-password",
      method: "POST",
      data: data,
    })
      .then((data) => {
        console.log(data.data, "data");
        notify({ type: "parol" });
        navigate("/auth");
      })

      .catch((error) => {
        console.log(error);
        notify({ type: "notEmail" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="bgcolor">
      <div className=" w-[90%] m-auto flex items-center justify-center h-full">
        <div className="bgcolorKichik w-[60%]">
          <form className="w-[50%] p-7 flex flex-col gap-4  items-center justify-center h-full">
            <h1 className="text-center text-[19px] font-bold text-[#9c6559] cursor-pointer">
              Change Password!
            </h1>
            <div className=" w-full flex flex-col gap-2">
              <label className={labelStyle}>Email</label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-[2px] border-[#9c6559] rounded-[6px] outline-none p-1"
                type="email"
                placeholder="Inter your email"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className={labelStyle}>Password</label>
              <div className="relative">
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  min={6}
                  max={12}
                  className="w-full border-[2px] border-[#9c6559] rounded-[6px] outline-none p-1"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={(e) => getData(e)}
              disabled={loading} // 🔥 loading bo'lsa tugma disable bo'ladi
              className={`w-full bg-[#9c6559] text-[#FFF] p-1.5 rounded-[6px] mt-4 
    transition-all duration-300 
    ${
      loading
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-[#854b41] opacity-100"
    }`}
            >
              {loading ? <LoadingOutlined /> : "Change password"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
