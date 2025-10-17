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
      <p className="text-center font-semibold mt-3 mb-3 border-1 border-zinc-500 rounded-xs p-1 ">
        East Coast Throwdown (ECT): 2009 - 2015
      </p>
 <p>
          Assisted (and ran one) in organizing one of the East Coast's premier
          fighting game tournaments alongside SweetJohnnyCage (John Gallagher) &
          LIJoe (Joe Ciaramelli). Contributed to venue coordination, prize
          distribution, tournament logistics, and live stream production,
          helping establish ECT as a historical event in the Fighting Game
          Community (FGC).
        </p>
    </>
  );
};

export default ECT;

