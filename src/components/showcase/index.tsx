import { Button } from "antd";

function Showcase() {
  return (
    <section className="bookshelf">
      <div className="flex flex-col m-auto items-center justify-center w-[90%] gap-[40px] h-[100vh]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[60px] text-[#FFF] font-bold">BLOOM BOOKSHOP</h1>
          <p className="text-[22px] text-[#fff] font-medium">
            Step Into Your Local Bookstore, Online: Expertly Curated,
            Community-Driven
          </p>
        </div>
        <Button className="">SHOP NOW</Button>
      </div>
    </section>
  );
}

export default Showcase;
