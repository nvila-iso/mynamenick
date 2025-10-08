import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "./sections/CoverPage";

const Flipbook = () => {
  const flipRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center">
      <HTMLFlipBook
        ref={flipRef}
        width={640}
        height={600}
        size="fixed"
        showCover
        mobileScrollSupport
        className=""
      >
        <CoverPage />
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
