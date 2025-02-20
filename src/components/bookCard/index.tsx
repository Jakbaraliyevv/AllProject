import book from "../../assets/book.png";
import { Button } from "antd";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";

function BookCard() {
  return (
    <div className="flex items-center justify-between w-[90%] m-auto">
      <div className="flex flex-col gap-2  max-[792px]:text-[0.8em] max-[435px]:text-[0.7em] max-[370px]:text-[0.6em] max-[334px]:text-[1em]">
        <div className="w-[100%]">
          <img
            className="w-full h-[280px] rounded-md max-[435px]:h-[220px]  max-[334px]:h-[300px]"
            src={book}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between">
              <p className=" text-[1em]  font-light">Fotix Duman</p>
              <button className="bg-transparent text-[1.2em]">
                <IoHeartOutline className="" />
              </button>
            </div>
            <h4 className="text-[1em]  font-medium">Men</h4>
          </div>
          <span className="flex items-center gap-9  justify-between">
            <a
              className="text-[1em]   font-normal"
              href=""
              target="blank"
              rel=""
              download
            >
              Pdf file yuklab olish
            </a>
          </span>

          <span className="flex items-center justify-between">
            <h3 className="text-[1em] font-normal">122 000 / So'm</h3>
            <Button className="!text-[1em] bg-transparent group hover:!bg-transparent">
              <IoBagOutline className=" group-hover:text-blue-500" />
            </Button>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2  max-[792px]:text-[0.8em] max-[435px]:text-[0.7em] max-[370px]:text-[0.6em] max-[334px]:text-[1em]">
        <div className="w-[100%]">
          <img
            className="w-full h-[280px] rounded-md max-[435px]:h-[220px]  max-[334px]:h-[300px]"
            src={book}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between">
              <p className=" text-[1em]  font-light">Fotix Duman</p>
              <button className="bg-transparent text-[1.2em]">
                <IoHeartOutline className="" />
              </button>
            </div>
            <h4 className="text-[1em]  font-medium">Men</h4>
          </div>
          <span className="flex items-center gap-9  justify-between">
            <a
              className="text-[1em]   font-normal"
              href=""
              target="blank"
              rel=""
              download
            >
              Pdf file yuklab olish
            </a>
          </span>

          <span className="flex items-center justify-between">
            <h3 className="text-[1em]    font-normal">122 000 / So'm</h3>
            <Button className="!text-[1em] bg-transparent group hover:!bg-transparent">
              <IoBagOutline className=" group-hover:text-blue-500" />
            </Button>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2  max-[792px]:text-[0.8em] max-[435px]:text-[0.7em] max-[370px]:text-[0.6em] max-[334px]:text-[1em]">
        <div className="w-[100%]">
          <img
            className="w-full h-[280px] rounded-md max-[435px]:h-[220px]  max-[334px]:h-[300px]"
            src={book}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between">
              <p className=" text-[1em]  font-light">Fotix Duman</p>
              <button className="bg-transparent text-[1.2em]">
                <IoHeartOutline className="" />
              </button>
            </div>
            <h4 className="text-[1em]  font-medium">Men</h4>
          </div>
          <span className="flex items-center gap-9  justify-between">
            <a
              className="text-[1em]   font-normal"
              href=""
              target="blank"
              rel=""
              download
            >
              Pdf file yuklab olish
            </a>
          </span>

          <span className="flex items-center justify-between">
            <h3 className="text-[1em]   font-normal">
              122 000 / So'm
            </h3>
            <Button className="!text-[1em] bg-transparent group hover:!bg-transparent">
              <IoBagOutline className=" group-hover:text-blue-500" />
            </Button>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2  max-[792px]:text-[0.8em] max-[435px]:text-[0.7em] max-[370px]:text-[0.6em] max-[334px]:text-[1em]">
        <div className="w-[100%]">
          <img
            className="w-full h-[280px] rounded-md max-[435px]:h-[220px]  max-[334px]:h-[300px]"
            src={book}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between">
              <p className=" text-[1em]  font-light">Fotix Duman</p>
              <button className="bg-transparent text-[1.2em]">
                <IoHeartOutline className="" />
              </button>
            </div>
            <h4 className="text-[1em]  font-medium">Men</h4>
          </div>
          <span className="flex items-center gap-9  justify-between">
            <a
              className="text-[1em]   font-normal"
              href=""
              target="blank"
              rel=""
              download
            >
              Pdf file yuklab olish
            </a>
          </span>

          <span className="flex items-center justify-between">
            <h3 className="text-[1em]   font-normal">122 000 / So'm</h3>
            <Button className="!text-[1em] bg-transparent group hover:!bg-transparent">
              <IoBagOutline className=" group-hover:text-blue-500" />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
