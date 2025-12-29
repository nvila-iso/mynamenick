import { FaCaretLeft } from "react-icons/fa";

const ECT = ({ setActiveQuest }) => {
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
          Secret Mission
        </p>
      </div>
      <p className="text-center font-semibold mt-1  border-1 border-zinc-500 rounded-xs px-1 ">
        East Coast Throwdown (ECT): 2009 - 2015
      </p>
      <p>
        Grew from volunteer staff to leading all event operations for one of the
        East Coast's premier fighting game tournaments alongside SweetJohnnyCage
        (John Gallagher) and LI Joe (Joe Ciaramelli). Successfully directed ECT
        from end-to-end, managing bracket operations, venue coordination, prize
        distribution, tournament logistics, and live stream production. Played a
        key role in establishing ECT as a landmark annual event in the Fighting
        Game Community.
      </p>
    </>
  );
};

export default ECT;
