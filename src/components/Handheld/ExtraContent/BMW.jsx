import { FaCaretLeft } from "react-icons/fa";

const BMW = ({ setActiveQuest }) => {
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
          Special Assigment
        </p>
      </div>
      <p className="text-center font-semibold mt-1 mb-1 border-1 border-zinc-500 rounded-xs p-1 ">
        BMW's National Aftersales Conference (NAC)
      </p>
      <p>
        Twice selected to lead the network setup for BMW's largest North
        American annual event. Oversaw wiring and configuration to ensure staff
        booths and participants had reliable internet access, coordinating
        closely with venue teams and mapping optimal cable runs. Balanced this
        role while also representing one of the Aftersales software booths,
        which supports BMW's flagship diagnostic programs.
      </p>
    </>
  );
};

export default BMW;
