import { forwardRef } from "react";

const BackCover = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-l-md shadow-md bg-[#F7DDB0]"
    >
      <div className="bg-[#648076] h-24 flex justify-center items-center text-white text-center">
        <p>
          LOOKING TO HIRE SOMEONE CREATIVE, TECHNICAL AND RELIABLE? <br /> EMAIL
          NVILA88@PROTON.ME
        </p>
      </div>

      <div className="flex flex-col justify-center items-center h-96 font-semibold gap-1">
        <p>mynamenick.com</p>
        <img src="src/assets/qrcode.svg" alt="" className="size-50" />
        <p>Thanks!</p>
      </div>

      <div className="bg-[#648076] h-18 flex flex-col justify-center items-center text-white text-center w-full">
        <p className="text-lg">
          Nicolas C Vila <br />
        </p>
        <p>nvila88@proton.me &nbsp; linkedin/nvila88</p>
      </div>
      <p className="text-xs text-center mt-4">
        © 2025 Nick Vila. All worlds imagined.
      </p>
    </div>
  );
});

export default BackCover;
