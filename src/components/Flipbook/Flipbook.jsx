import { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip"; // https://nodlik.github.io/react-pageflip/
import CoverPage from "./sections/CoverPage";
import PageOne from "./sections/PageOne";
import PageTwo from "./sections/PageTwo";
import PageThree from "./sections/PageThree";
import PageFour from "./sections/PageFour";
import PageFive from "./sections/PageFive";
import PageSix from "./sections/PageSix";
import BackCover from "./sections/BackCover";

const Flipbook = () => {
  const flipRef = useRef(null);
  const [usePortrait, setUsePortrait] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => setUsePortrait(window.innerWidth < 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="mx-auto flex justify-center flipbook">
        <HTMLFlipBook
          key={usePortrait ? "portrait" : "landscape"}
          ref={flipRef}
          size="fixed"
          width={640}
          height={600}
          showCover
          usePortrait={usePortrait}
          flippingTime={900}
          maxShadowOpacity={0.1}
          mobileScrollSupport
          className=""
        >
          <CoverPage />
          <PageOne />
          <PageTwo />
          <PageThree />
          <PageFour />
          <PageFive />
          <PageSix />
          <BackCover />
        </HTMLFlipBook>
      </div>

      <div className="absolute w-full bottom-10 flex flex-col justify-center items-center">
        <div className="flex gap-5 mb-5">
          <button
            className="w-24 p-2 bg-[#E34A6F] rounded-md text-white shadow-[#6A1127] shadow-[-3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[-20px_0px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() => flipRef.current?.pageFlip().flipPrev()}
          >
            previous
          </button>
          <button
            className="w-24 p-2 bg-[#648076] text-white rounded-md shadow-[#36453F] shadow-[3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
            onClick={() => flipRef.current?.pageFlip().flipNext()}
          >
            next
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-[#6494AA] text-white flex flex-col p-2 rounded-md shadow-[#2B444F] shadow-[-5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[-5px_-5px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() =>
              window.open("/pdf/NickVilaResume-2025.pdf", "_blank")
            }
          >
            normal resume
          </button>
          <button
            className="bg-[#6494AA] text-white flex flex-col p-2 rounded-md shadow-[#2B444F] shadow-[0px_5px_0px_rgba(0,0,0,1)] hover:shadow-[0px_-5px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() => window.open("/pdf/NickVila_manual.pdf", "_blank")}
          >
            pdf manual
          </button>
          <button
            className="bg-[#6494AA] text-white flex flex-col p-2 rounded-md shadow-[#2B444F] shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[5px_-5px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() => window.open("/pdf/NickVila_foldable.pdf", "_blank")}
          >
            foldable manual
          </button>
        </div>
      </div>
    </>
  );
};

export default Flipbook;
