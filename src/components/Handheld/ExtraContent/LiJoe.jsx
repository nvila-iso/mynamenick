import { FaCaretLeft } from "react-icons/fa";

const LiJoe = () => {

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
      <div className="flex flex-col">
        <p className="text-center font-semibold mt-3 mb-3 border-1 border-zinc-500 rounded-xs p-1 ">
          LiJoe's Youtube & Twitch Channel (1 year)
        </p>
        <p>
          Collaborated with LIJoe to manage and grow his online presence by
          editing Twitch VODs for Youtube, designing channel logos, video
          packages and producing tournament content. Highlights include
          co-running "Beta Bash", one of the first Street Fighter V beta
          tournaments, where I created all promotional graphics and developed a
          custom animated scoreboard in After Effects.
        </p>
      </div>
    </>
  );
};

export default LiJoe;
