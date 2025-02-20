import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginType } from "../../../types";
import { useAxios } from "../../../hooks/axios";

function Login() {
  const axios = useAxios();
  const [showPassword, setShowPassword] = useState(false);
  const labelStyle = "text-[17px] font-medium text-[#9c6559]";

  // login start

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = (e: React.FormEvent) => {
    e.preventDefault();

    if(!email || !password){
      

    }
    const data: LoginType = {
      email: email,
      password: password,
    };

    axios({
      url: "/sign-in",
      method: "POST",
      data: data,
    })
      .then((data) => {
        console.log(data.data, "data");
        localStorage.setItem("token", data.data.token);
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="w-full">
      <form className="w-[50%] p-7 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>Email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-[2px] border-[#9c6559] rounded-[6px] outline-none p-1"
            type="email"
            placeholder="Inter your email"
          />
        </div>
        <div className="flex flex-col gap-1">
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
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        <button
          onClick={(e) => getData(e)}
          className="w-full bg-[#9c6559] text-[#FFF] p-1.5 rounded-[6px] mt-4 hover:bg-[#854b41] transition-all duration-300"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
