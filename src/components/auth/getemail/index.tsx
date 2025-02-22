import { useState } from "react";
import { useAxios } from "../../../hooks/axios";
import notificationApi from "../../../generic/notificition";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function GetEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const notify = notificationApi();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const getData = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      notify({ type: "full" });
      return;
    }

    if (!validateEmail(email)) {
      notify({ type: "forma" });
      return;
    }

    setLoading(true);

    axios({
      url: "/reset-password",
      method: "POST",
      data: { email },
    })
      .then((data) => {
        console.log(data);
        notify({ type: "emaill" });
        navigate("/verify");
      })
      .catch((error) => {
        console.log(error);
        notify({ type: "notEmail" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bgcolor">
      <div className=" w-[90%] m-auto flex items-center justify-center h-full">
        <div className="bgcolorKichik w-[60%]">
          <div className="flex items-center justify-center w-[50%] p-9 h-full">
            <form className="flex w-full  items-center justify-center flex-col gap-5">
              <div className="flex flex-col gap-2 w-full ">
                <label className="text-[17px] font-medium text-[#9c6559]">
                  Email
                </label>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-[2px] border-[#9c6559] rounded-[6px] outline-none p-1"
                  type="email"
                  placeholder="Inter your email"
                />
              </div>

              <button
                onClick={(e) => getData(e)}
                disabled={loading}
                className={`w-full bg-[#9c6559] text-[#FFF] p-1.5 rounded-[6px] mt-4 transition-all duration-300 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#854b41] opacity-100"
                }`}
              >
                {loading ? <LoadingOutlined /> : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetEmail;

// import { useState } from "react";
// import { useAxios } from "../../../hooks/axios";
// import notificationApi from "../../../generic/notificition";
// import { LoadingOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// function GetEmail() {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const axios = useAxios();
//   const notify = notificationApi();
//   const navigate = useNavigate();

//   const validateEmail = (email: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setEmail(value);

//     if (!validateEmail(value)) {
//       setError("Noto‘g‘ri email formati!");
//     } else {
//       setError("");
//     }
//   };

//   const getData = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email) {
//       notify({ type: "full" });
//       return;
//     }

//     if (!validateEmail(email)) {
//       notify({ type: "notEmail" });
//       return;
//     }

//     setLoading(true);

//     axios({
//       url: "/reset-password",
//       method: "POST",
//       data: { email },
//     })
//       .then((data) => {
//         console.log(data);
//         notify({ type: "emaill" });
//         navigate("/verify");
//       })
//       .catch((error) => {
//         console.log(error);
//         notify({ type: "notEmail" });
//       })
//       .finally(() => setLoading(false));
//   };

//   return (
//     <section className="bgcolor">
//       <div className="w-[90%] m-auto flex items-center justify-center h-full">
//         <div className="bgcolorKichik w-[60%]">
//           <div className="flex items-center justify-center w-[50%] p-9 h-full">
//             <form className="flex w-full items-center justify-center flex-col gap-5">
//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[17px] font-medium text-[#9c6559]">
//                   Email
//                 </label>
//                 <input
//                   required
//                   onChange={handleChange}
//                   value={email}
//                   className={`w-full border-[2px] ${
//                     error ? "border-red-500" : "border-[#9c6559]"
//                   } rounded-[6px] outline-none p-1`}
//                   type="email"
//                   placeholder="Enter your email"
//                 />
//                 {error && <span className="text-red-500 text-sm">{error}</span>}
//               </div>

//               <button
//                 onClick={getData}
//                 disabled={loading}
//                 className={`w-full bg-[#9c6559] text-[#FFF] p-1.5 rounded-[6px] mt-4 transition-all duration-300 ${
//                   loading
//                     ? "opacity-50 cursor-not-allowed"
//                     : "hover:bg-[#854b41] opacity-100"
//                 }`}
//               >
//                 {loading ? <LoadingOutlined /> : "Login"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default GetEmail;
