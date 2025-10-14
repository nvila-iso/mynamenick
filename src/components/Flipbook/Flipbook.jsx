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
        className=""npm
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
  );
};

export default Flipbook;
