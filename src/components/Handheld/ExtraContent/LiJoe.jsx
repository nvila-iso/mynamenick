import { FaCaretLeft } from "react-icons/fa";

const LiJoe = ({ setActiveQuest }) => {
  return (
    <>
      <div className="flex w-full gap-1 text-[#c2c0bc]">
        <button
          onClick={() => setActiveQuest("ContentOptions")}
          className="bg-zinc-700 p-1"
        >
          <FaCaretLeft />
        </button>
        <p className="text-center bg-zinc-700 w-full font-semibold p-1 italic">
          Side Quest
        </p>
      </div>
      <div className="flex flex-col  overflow-auto">
        <p className="text-center font-semibold mt-1 mb-1 border-1 border-zinc-500 rounded-xs p-1 ">
          LI Joe's YouTube & Twitch Channel (1 year)
        </p>
        <p className="">
          Collaborated with LI Joe to manage and grow his online presence by
          editing Twitch VODs for YouTube, designing channel logos and video
          packages, and producing tournament content. Highlights include
          co-running "Beta Bash", one of the first Street Fighter 6 beta
          tournaments, where I created all promotional graphics and developed a
          custom animated scoreboard in After Effects.
        </p>
      </div>
    </>
  );
};

export default LiJoe;
