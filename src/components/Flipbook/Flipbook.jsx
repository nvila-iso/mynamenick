import { useRef } from "react";
import HTMLFlipBook from "react-pageflip"; // https://nodlik.github.io/react-pageflip/
import CoverPage from "./sections/CoverPage";
import PageOne from "./sections/PageOne";
import PageTwo from "./sections/PageTwo";
import PageThree from "./sections/PageThree";
import PageFour from "./sections/PageFour";

const Flipbook = () => {
  const flipRef = useRef(null);

  return (
    <div className="inline-block">
      <HTMLFlipBook
        ref={flipRef}
        width={640}
        height={600}
        size="fixed"
        autoSize={false}
        showCover={true}
        usePortrait={false}
        drawShadow
        showPageCorners
        flippingTime={900}
        maxShadowOpacity={0.1}
        mobileScrollSupport
        className="rounded-l-md"
      >
        <CoverPage />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <CoverPage />
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
