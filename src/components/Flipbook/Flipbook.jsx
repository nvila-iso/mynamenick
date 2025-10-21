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
          npm
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
      <div className="absolute w-full bottom-10 flex justify-center">
        <div className="flex gap-2">
          <button className="bg-white flex flex-col p-2 rounded-md shadow-[-5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[-5px_-5px_0px_rgba(0,0,0,1)] transition-all">
            Boring Resume
          </button>
          <button
            className="bg-white flex flex-col p-2 rounded-md shadow-[0px_5px_0px_rgba(0,0,0,1)] hover:shadow-[0px_-5px_0px_rgba(0,0,0,1)] transition-all"
            onClick={() => window.open("/pdf/PDF_Manual.pdf", "_blank")}
          >
            PDF Manual
          </button>
          <button className="bg-white flex flex-col p-2 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[5px_-5px_0px_rgba(0,0,0,1)] transition-all">
            Foldable Manual
          </button>
        </div>
      </div>
    </>
  );
};

export default Flipbook;
