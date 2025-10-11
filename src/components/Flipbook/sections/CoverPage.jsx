import { forwardRef } from "react";


const CoverPage = forwardRef((_, ref) => {

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-l-md shadow-md font-inter"
    >
      <div className="grid grid-cols-[130px_1fr] w-160 h-150">
        <div className="flex flex-col py-5 items-center bg-gradient-to-t from-zinc-400 via-zinc-300 to-zinc-400">
          <div className="border-3 border-red-600 rounded-full w-27 h-6">
            <p className="text-red-600 text-xl font-bold italic relative bottom-[4px] left-[9px]">
              Nick Vila
            </p>
          </div>

          <p className="text-[5.3rem] [writing-mode:vertical-rl] rotate-180 relative top-5 right-0 text-[#3669B5] font-extrabold italic">
            DEVELOPER
          </p>
        </div>
        <div className="overflow-hidden">
          <img src="src/assets/logo.webp" className="absolute size-50" />
          <img src="src/assets/game_cover.webp" className="object-cover" />
          <p className="relative bottom-55 left-70 text-white italic text-2xl font-semibold">
            Resume Booklet
          </p>
        </div>
      </div>
    </div>
  );
});

export default CoverPage;
