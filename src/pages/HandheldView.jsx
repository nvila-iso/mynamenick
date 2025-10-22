import { useState, useMemo } from "react";
import { Link } from "react-router";

import {
  FaCaretLeft,
  FaCaretRight,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";

import OpeningScreen from "../components/Handheld/OpeningScreen";
import CoverLetter from "../components/Handheld/CoverLetter";
import PlayerProfile from "../components/Handheld/PlayerProfile";
import Controls from "../components/Handheld/Controls";
import Experience from "../components/Handheld/Experience";
import SideQuest from "../components/Handheld/SideQuest";
import AboutDev from "../components/Handheld/AboutDev";
import Credits from "../components/Handheld/Credits";
import Instructions from "../components/Handheld/Instructions";

const HandheldView = () => {
  const screens = useMemo(
    () => [
      Instructions,
      OpeningScreen,
      CoverLetter,
      PlayerProfile,
      Controls,
      Experience,
      SideQuest,
      AboutDev,
      Credits,
    ],
    []
  );
  const [screenIdx, setScreenIdx] = useState(0);
  const [companyDialogue, setCompanyDialogue] = useState(false); // prop for OpeningScreen

  const clamp = (num) => Math.max(0, Math.min(num, screens.length - 1)); // prevents going below 0

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

  // Up & Down Controls
  const scrollByAmount = (amount) => {
    const el = document.getElementById("scroll-area");
    if (el) el.scrollBy({ top: amount });
  };

  return (
    <>
      <div className="w-screen h-screen">
        {/* Handheld  */}
        <div className="bg-[#968CC0] max-w-full min-h-screen flex flex-col items-center mx-auto">
          <div
            id="screen-frame"
            className="mt-3 bg-radial-[at_75%_25%] from-zinc-400 to-black to-35% w-[90%] h-100 flex justify-center items-center rounded-t-sm border-l-2 border-t-2 border-r-2 border-[#6F59C8] border-double"
          >
            <div
              id="screen"
              className="bg-[#c2c0bc] w-[90%] inset-shadow-sm inset-shadow-zinc-600 rounded-sm "
            >
              <div>
                <Screen
                  key={screenIdx}
                  companyDialogue={companyDialogue}
                  setCompanyDialogue={setCompanyDialogue}
                  next={next}
                  prev={prev}
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
            <div
              id="d-pad"
              className="w-28 h-28 bg-black/5 inset-shadow-sm inset-shadow-black/15 rounded-full flex justify-center items-center"
            >
              {/* Left and Right */}
              <div className="bg-zinc-800 to-45% h-8 w-[90%] mx-auto rounded-md flex justify-between items-center p-2 shadow-sm">
                <FaCaretLeft
                  className="h-6 text-black/30 active:text-black"
                  onClick={prev}
                />
                <FaCaretRight
                  className="h-6 text-black/30 active:text-black"
                  onClick={next}
                />
              </div>
              {/* Up and Down */}
              <div className="bg-radial-[at_95%_10%] from-zinc-600 to-zinc-800 to-20% w-8 h-25 mx-auto rounded-md flex flex-col justify-between items-center p-2 absolute left-356shadow-sm">
                <FaCaretUp
                  className="h-6 text-black/30 active:text-black"
                  onClick={() => scrollByAmount(-100)}
                />
                <div className="w-3 h-3 rounded-full bg-radial-[at_45%_35%] from-zinc-800 to-zinc-900"></div>
                <FaCaretDown
                  className="h-6 text-black/30 active:text-black"
                  onClick={() => scrollByAmount(100)}
                />
              </div>
            </div>
            <div id="start-select" className="flex gap-2 relative top-25">
              <button>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-3 bg-radial-[at_95%_25%] from-zinc-600 to-zinc-800 to-45% rounded-full text-center active:bg-none active:bg-zinc-700 active:inset-shadow-sm inset-shadow-zinc-900"></div>
                  <p className="text-black/50 text-semibold">start</p>
                </div>
              </button>

              <button onClick={() => setScreenIdx(1)}>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-3 bg-black bg-radial-[at_95%_25%] from-zinc-500 to-zinc-800 to-45% rounded-full active:bg-none active:bg-zinc-700 active:inset-shadow-sm inset-shadow-zinc-900"></div>

                  <p className="text-black/50 text-semibold">select</p>
                </div>
              </button>
            </div>
            <div id="buttons" className="flex">
              <button onClick={prev}>
                <p className="flex justify-center items-center w-15 h-15 bg-radial-[at_75%_25%] from-zinc-500 to-zinc-800 to-45% text-zinc-200 text-lg rounded-full text-center active:text-zinc-500 active:bg-none active:bg-zinc-700 active:inset-shadow-sm inset-shadow-zinc-900">
                  B
                </p>
              </button>
              <button
                onClick={next}
                className="flex justify-center items-center w-15 h-15 bg-radial-[at_75%_25%] from-zinc-500 to-zinc-800 to-45% text-zinc-200 text-lg rounded-full text-center relative bottom-8 active:text-zinc-500 active:bg-none active:bg-zinc-700 active:inset-shadow-sm inset-shadow-zinc-900"
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
