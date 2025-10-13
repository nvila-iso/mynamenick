import { forwardRef } from "react";
import PageLayout from "../PageLayout";

const renderHR = (num) => {
  return Array.from({ length: num }, (_, i) => {
    return <hr key={i} className="text-black/30 w-full mt-8" />;
  });
};

const PageSix = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Character Story" pageNumber={6}>
      <p className="text-2xl font-bold text-center">NOTES</p>
      <hr className="text-black/30" />
      <div className="px-2 flex flex-col justify-center">
        {renderHR(13)}
        <p className="mt-2 font-semibold italic text-center">
          Keep track of your progress, ideas, or cheat codes right here!
        </p>
      </div>

      <img
        src="src/assets/running.svg"
        alt=""
        className="size-90 absolute left-37 bottom-20"
      />
    </PageLayout>
  );
});

export default PageSix;
