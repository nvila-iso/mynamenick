import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import Talking from "/src/assets/arms_crossed.svg?react";
import vhsStack from "../../../assets/vhs_stack.svg"
import tvStack from "../../../asset/tv_stack.svg"


const PageFive = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Character Story" pageNumber={5}>
      <p className="text-2xl font-bold text-center">ABOUT THE DEVELOPER</p>
      <hr className="text-black/30" />
      <div className="mt-5 px-2">
        <div>
          <p className="h-60 text-center whitespace-pre-wrap">
            Born with a controller in one hand and a keyboard in the other, Nick
            Vila is a creator who blends code, design,                    and nostalgia into
            everything he makes. From building retro-                                   inspired websites to
            crafting real-world projects with 3D printing                           and AI, Nick treats
            every idea like a new level                           to explore.
          </p>
          <div className="flex flex-col gap-1 absolute bottom-60 left-8">
            <div className="flex items-end justify-center">
              <img
                src={vhsStack}
                alt="Stack of VHS tapes"
                className="h-20 "
              />
              <Talking className="size-50 quiet"/>
              <img
                src={tvStack}
                alt="Retro TV stack"
                className="h-20 "
              />
            </div>
          </div>
          <p className="text-center">
            When he's not debugging or designing, you'll probably find him
            tinkering with old tech, organizing his VHS collection, or sketching
            his next big concept
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-5">
          <div className="text-center">
            <p className="text-2xl font-bold italic">THANK YOU FOR PLAYING!</p>
            <p>
              Your curiosity and creativity keep the pixels glowing.
              <br className="hidden sm:block" />
              Game on—and don’t forget to save your progress!
            </p>
          </div>
          <p className="text-xs text-zinc-600">
            <strong className="font-semibold">Developer’s Note:</strong> Some
            artwork in this manual was created with the assistance of AI and
            redrawn in vector by hand for print.
          </p>
        </div>
      </div>
    </PageLayout>
  );
});

export default PageFive;
