import vhsStand from "../../assets/vhsStanding.svg";
import vhsStack from "../../assets/vhs_stack.svg";
import tvStack from "../../assets/tv_stack.svg";
import ScreenTemplate from "./ScreenTemplate";

const AboutDev = () => {
  return (
    <>
      <ScreenTemplate>
        <p className="text-center text-lg">ABOUT THE DEVELOPER</p>
        <div className="border-2 border-zinc-500 rounded-md text-sm flex flex-col items-center p-1 gap-1">
          <p className="text-justify">
            Born with a controller in one hand and a keyboard in the other, Nick
            Vila is a creator who blends code, design, and nostalgia into
            everything he makes.
          </p>
          <div className="flex items-end gap-1">
            <img src={vhsStack} alt="" className="h-5" />
            <img src={tvStack} alt="" className="h-10" />
            <img src={vhsStack} alt="" className="h-5 rotate-y-180" />
          </div>

          <p className="text-justify">
            From building retro-inspired websites to crafting real-world
            projects with 3D printing and AI, Nick treats every idea like a new
            level to explore.
          </p>
          <div className="flex items-end gap-1">
            <img src={vhsStack} alt="" className="h-5" />
            <img src={vhsStand} alt="" className="h-5" />
            <img src={vhsStand} alt="" className="h-5" />
            <img src={vhsStand} alt="" className="h-5" />
            <img src={vhsStack} alt="" className="h-5 rotate-y-180" />
          </div>
          <p className="text-justify">
            When he's not debugging or designing, you'll probably find him
            tinkering with old tech, organizing his VHS collection or sketching
            his next big concept
          </p>
        </div>
      </ScreenTemplate>
    </>
  );
};

export default AboutDev;
