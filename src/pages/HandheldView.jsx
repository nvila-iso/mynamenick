import cover from "../assets/Cover.svg";
import Greeting from "./Greeting";

const HandheldView = () => {
  return (
    <>
      <div className="mt-2 w-screen min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <p className="bg-white rounded-full py-1 px-2 mb-2 shadow-sm">
            Currently playing
          </p>
          <img src={cover} alt="" className="w-50 shadow-md" />
        </div>
        <div className="mt-5 bg-[#968CC0] w-full min-h-screen flex flex-col items-center">
          <div
            id="screen-frame"
            className="mt-3 bg-black w-[90%] h-100 flex justify-center items-center rounded-t-sm border-l-2 border-t-2 border-r-2 border-[#6F59C8] border-double"
          >
            <div
              id="screen"
              className="bg-[#c2c0bc] w-[90%] h-90 inset-shadow-sm inset-shadow-zinc-600 rounded-sm"
            >
              <div className="relative left-14 top-2 scale-65 origin-top-left w-full h-full ">
                <Greeting className="object-contain" />
              </div>
            </div>
          </div>
          <div className="bg-black w-[90%] h-10 rounded-b-full border-l-2 border-b-2 border-r-2 border-[#6F59C8] border-double">
            <p className="text-white text-center ">my name nick</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandheldView;
