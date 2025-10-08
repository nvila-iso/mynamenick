import { forwardRef } from "react";

const CoverPage = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="w-[640px] h-[600px]">
      <div className="grid grid-cols-[130px_1fr] w-160 h-150 shadow-[0_2px_8px_rgba(0,0,0,0.25)] rounded-md">
        <div className="flex flex-col py-5 items-center bg-linear-to-t from-zinc-200 via-zinc-500 to-zinc-200">
          <p className="text-center text-red-600 text-lg font-semibold border-3 border-red-600 rounded-full w-25">
            Nick Vila
          </p>
          <p className="text-7xl rotate-270 relative top-55 font-bold italic text-[#3669B5]">
            DEVELOPER
          </p>
        </div>
        <div className="overflow-hidden">
          <img
            src="src/assets/bf4a7eb8-def8-4f42-ae22-798b343ddb97.png"
            className="absolute size-50"
          />
          <img src="src/assets/upscaled_image.png" className="object-cover" />
          <p className="relative bottom-55 left-70 text-white italic text-2xl font-semibold">
            Resume Booklet
          </p>
        </div>
      </div>
    </div>
  );
});

export default CoverPage;
