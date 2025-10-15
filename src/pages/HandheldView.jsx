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
          <div
            id="controls"
            className="w-[85%] mt-5 flex justify-between items-center"
          >
            <div id="d-pad" className="w-28 h-28 bg-black rounded-full">
              <div id="left" className=""></div>
            </div>
            <div id="start-select" className="flex gap-2">
              <div className="flex flex-col items-center">
                <div className="w-8 h-3 bg-black rounded-full"></div>
                <p>start</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-3 bg-black rounded-full"></div>
                <p>select</p>
              </div>
            </div>
            <div id="buttons" className="flex">
              <p className="flex justify-center items-center w-15 h-15 bg-radial-[at_75%_25%] from-zinc-500 to-zinc-900 to-45% text-zinc-200 text-lg rounded-full text-center">
                B
              </p>
              <p className="flex justify-center items-center w-15 h-15 bg-radial-[at_75%_25%] from-zinc-500 to-zinc-900 to-45% text-zinc-200 text-lg text-white rounded-full text-center relative bottom-8">
                A
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandheldView;
