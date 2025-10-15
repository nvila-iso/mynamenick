import { useState, useMemo } from "react";

import cover from "../assets/Cover.svg";
import OpeningScreen from "../components/Handheld/OpeningScreen";
import ScreenOne from "../components/Handheld/ScreenOne";
import ScreenTwo from "../components/Handheld/ScreenTwo";
import ScreenThree from "../components/Handheld/ScreenThree";
import ScreenFour from "../components/Handheld/ScreenFour";

const HandheldView = () => {
  const screens = useMemo(
    () => [OpeningScreen, ScreenOne, ScreenTwo, ScreenThree, ScreenFour],
    []
  );
  const [screenIdx, setScreenIdx] = useState(0);
  const [companyDialogue, setCompanyDialogue] = useState(false); // prop for OpeningScreen

  const clamp = (num) => Math.max(0, Math.min(num, screens.length - 1)); // prevents going below 0

  // const next = () => setScreenIdx((i) => clamp(i + 1)); // Button A
  // const prev = () => setScreenIdx((i) => clamp(i - 1)); // Button B

  const Screen = screens[screenIdx];
  const isOpening = Screen === OpeningScreen;

  const next = () => {
    if (isOpening && !companyDialogue) {
      setCompanyDialogue(true);
      return;
    } else {
      setScreenIdx((i) => clamp(i + 1));
    }
  };

  const prev = () => {
    if (isOpening && companyDialogue) {
      setCompanyDialogue(false);
      return;
    } else {
      setScreenIdx((i) => clamp(i - 1));
    }
  };

  return (
    <>
      <div className="mt-2 w-screen min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <p className="bg-white rounded-full py-1 px-2 mb-2 shadow-sm">
            Currently playing
          </p>
          <img src={cover} alt="" className="w-50 shadow-md" loading="lazy" />
        </div>
        <div className="mt-5 bg-[#968CC0] w-full min-h-screen flex flex-col items-center">
          <div
            id="screen-frame"
            className="mt-3 bg-radial-[at_75%_25%] from-zinc-400 to-black to-35% w-[90%] h-100 flex justify-center items-center rounded-t-sm border-l-2 border-t-2 border-r-2 border-[#6F59C8] border-double"
          >
            <div
              id="screen"
              className="bg-[#c2c0bc] w-[90%] h-90 inset-shadow-sm inset-shadow-zinc-600 rounded-sm"
            >
              <div>
                <Screen
                  key={screenIdx}
                  companyDialogue={companyDialogue}
                  setCompanyDialogue={setCompanyDialogue}
                  next={next}
                />
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
              <button>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-3 bg-radial-[at_95%_25%] from-zinc-500 to-zinc-800 to-45%  rounded-full text-center hover:bg-none hover:bg-zinc-700 hover:inset-shadow-sm inset-shadow-zinc-900"></div>
                  <p className="text-black/50 text-semibold">start</p>
                </div>
              </button>

              <button>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-3 bg-black bg-radial-[at_95%_25%] from-zinc-500 to-zinc-800 to-45% rounded-full hover:bg-none hover:bg-zinc-700 hover:inset-shadow-sm inset-shadow-zinc-900"></div>
                  <p className="text-black/50 text-semibold">select</p>
                </div>
              </button>
            </div>
            <div id="buttons" className="flex">
              <button onClick={prev}>
                <p className="flex justify-center items-center w-15 h-15 bg-radial-[at_75%_25%] from-zinc-500 to-zinc-800 to-45% text-zinc-200 text-lg rounded-full text-center hover:text-zinc-500 hover:bg-none hover:bg-zinc-700 hover:inset-shadow-sm inset-shadow-zinc-900">
                  B
                </p>
              </button>
              <button
                onClick={next}
                className="flex justify-center items-center w-15 h-15 bg-radial-[at_75%_25%] from-zinc-500 to-zinc-800 to-45% text-zinc-200 text-lg rounded-full text-center relative bottom-8 hover:text-zinc-500 hover:bg-none hover:bg-zinc-700 hover:inset-shadow-sm inset-shadow-zinc-900"
              >
                <p>A</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandheldView;
