import treasure from "../../../assets/treasure.svg";

const ContentOptions = ({ setActiveQuest }) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-3">
        <img src={treasure} alt="" className="h-45" loading="lazy" />
        <div className="flex justify-center items-center gap-5 cursor-pointer">
          <div className="h-17 w-17 border-2 border-black/30 rounded-sm flex justify-center items-center">
            <div
              className="text-[#c2c0bc] font-semibold bg-zinc-600 h-15 w-15 flex justify-center items-center rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-black/50 hover:transition-colors"
              onClick={() => setActiveQuest("LiJoe")}
            >
              LIJoe
            </div>
          </div>
          <div className="h-17 w-17 border-2 border-black/30 rounded-sm flex justify-center items-center">
            <div
              className="text-[#c2c0bc] font-semibold bg-zinc-600 h-15 w-15 flex justify-center items-center rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-black/50 hover:transition-colors"
              onClick={() => setActiveQuest("BMW")}
            >
              BMW
            </div>
          </div>
          <div className="h-17 w-17 border-2 border-black/30 rounded-sm flex justify-center items-center">
            <div
              className="text-[#c2c0bc] font-semibold bg-zinc-600 h-15 w-15 flex justify-center items-center rounded-sm hover:bg-transparent hover:text-black hover:border hover:border-black/50 hover:transition-colors"
              onClick={() => setActiveQuest("ECT")}
            >
              ECT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOptions;
