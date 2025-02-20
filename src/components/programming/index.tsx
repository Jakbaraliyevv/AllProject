import { Button } from "antd";
import show from "../../assets/showImage.png";

function Programming() {
  return (
    <section className="w-[90%] m-auto flex items-center justify-between gap-7 my-[60px] ">
      <div className="w-[100%]">
        <img className="w-full" src={show} alt="" />
      </div>
      <div className="flex  flex-col gap-[50px] items-center ">
        <h2 className="text-[40px] font-bold">Bloom Programming</h2>
        <div className="text-[19px] font-medium tracking-wide flex flex-col gap-9">
          <p>
            To further community engagement, we host an array of literary and
            cultural events, including monthly book clubs for children and
            adults, an annual book fair, and an annual holiday gift bazaar.
          </p>
          <p>
            Inspired by London’s Gresham College — an institution providing free
            public lectures since 1597 — our mission is to foster the
            advancement of culture and knowledge. Bloom Programming events seek
            to entertain our sense of curiosity, inspire new areas of interest,
            and ultimately contribute to Tampa’s emergence as a cultural
            destination.
          </p>
        </div>

        <Button className="w-[40%] text-[19px] font-medium ">LEARN MORE</Button>
      </div>
    </section>
  );
}

export default Programming;
