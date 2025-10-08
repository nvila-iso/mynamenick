import { forwardRef } from "react";

const BackCover = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-l-md shadow-md "
    >
      <div className="grid grid-cols-[130px_1fr] w-160 h-150">
        <div className="flex flex-col py-5 items-center bg-gradient-to-t from-zinc-400 via-zinc-300 to-zinc-400">
          <p className="text-center text-red-600 text-lg font-semibold border-3 border-red-600 rounded-full w-25">
            Nick Vila
          </p>
          <p className="text-7xl [writing-mode:vertical-rl] rotate-180 relative top-20 font-bold italic text-[#3669B5]">
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

export default BackCover;
