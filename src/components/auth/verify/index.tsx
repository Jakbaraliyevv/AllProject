import { Flex, Input } from "antd";
import { useState } from "react";
import { VerifyType } from "../../../types";
import { useAxios } from "../../../hooks/axios";

function Verify() {
  const [code, setCode] = useState("");
  const axios = useAxios();
  const getData = (e: React.FormEvent) => {
    e.preventDefault();
    const data: VerifyType = {
      code: code,
    };

    axios({
      url: "verify",
      method: "POST",
      data: data,
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <section className="bgcolor">
      <div className=" w-[90%] m-auto flex items-center justify-center h-full">
        <div className="bgcolorKichik w-[60%]">
          <div className="flex items-center justify-center w-[50%] p-9 h-full">
            <form className="flex w-full  items-center justify-center flex-col gap-5">
              <h2 className="text-[17px]  text-[#9c6559] font-medium">
                Tasdiqlash codini kiritig:
              </h2>
              <Flex gap="middle" align="flex-start" vertical>
                <Input.OTP
                  onChange={(value) => setCode(value)}
                  style={{ width: "400px" }}
                />
              </Flex>

              <button
                onClick={(e) => getData(e)}
                className={`w-full bg-[#9c6559] text-[#FFF] p-1.5 rounded-[6px] mt-4 transition-all duration-300 `}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verify;
