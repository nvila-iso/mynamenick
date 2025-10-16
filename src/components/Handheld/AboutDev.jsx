import { useState } from "react";
import TypeIt from "typeit-react";
import Talking from "/src/assets/arms_crossed.svg?react";
import vhsStack from "../../assets/vhs_stack.svg";
import tvStack from "../../assets/tv_stack.svg";

const AboutDev = () => {
  const [startTalking, setStartTalking] = useState(false);
  return (
    <>
      <div className="h-90 p-1">
        <p className="text-center text-lg">ABOUT THE DEVELOPER</p>
        <div className="border-2 border-zinc-500 rounded-md text-sm h-[92%] flex flex-col items-center">
          <p className="whitespace-pre-wrap p-1">
            Born with a controller in one hand and a keyboard in the other, Nick
            Vila is a creator who blends code, design, and nostalgia into
            everything he makes. From building retro-inspired websites to
            crafting real-world projects with 3D printing               and AI, Nick treats
            every idea like a new                          level to explore
          </p>
          <div className="flex justify-center items-end w-full absolute bottom-80">
            <img src={vhsStack} alt="Stack of VHS tapes" className="h-12" />
            <Talking className="h-35 w-30 quiet" />
            <img src={tvStack} alt="Retro TV stack" className="h-12" />
          </div>
          <TypeIt
            options={{ speed: 5, lifeLife: true, cursor: false }}
            getBeforeInit={(instance) => {
              instance
                .exec(async () => await setStartTalking(true))
                .type(``)
                .exec(async () => await setStartTalking(false));

              return instance;
            }}
          />
          <p className="relative top-25 text-center">
            When he's not debugging or designing, you'll probably find him
            tinkering with old tech, organizing his VHS collection or sketching
            his next big concept
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutDev;
