import { Button } from "antd";
import img from "../../assets/book.png";

function CartComponents() {
  return (
    <section className="mt-9 flex items-start justify-between w-[90%] m-auto gap-5">
      <div className="w-[80%] border-[1px] border-[#6b3529] p-4 rounded-md">
        <div className="flex items-center justify-between gap-5 my-5">
          <div className="flex items-center gap-7 w-[50%]">
            <img src={img} className="w-[25%]" alt="" />
            <div className="flex flex-col gap-3">
              <h2>MEN</h2>
              <p>Fotix Duman</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore quidem deserunt praesentium, veniam ut aperiam cum modi.
              </p>
            </div>
          </div>

          <div className="flex items-center w-[10%] justify-between">
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </div>

          <div className="flex flex-col gap-4 w-[10%]">
            <div className="flex items-center justify-between">
              <h3>Narxi:</h3>
              <h4>59 000</h4>
            </div>
            <button className="w-full border-none outline-none bg-red-600 rounded-md text-[#FFF] h-[29px]">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#6b3529] w-[20%] h-[200px] rounded-md p-7 flex flex-col gap-7">
        <h2>Buyurtmangiz</h2>
        <div className="flex items-center justify-between">
          <h2>Jami:</h2>
          <p>244000</p>
        </div>
        <button className="w-full border-none outline-none bg-blue-600 text-[#FFF] h-[29px] rounded-md">
          Sotib olish
        </button>
      </div>
    </section>
  );
}

export default CartComponents;
