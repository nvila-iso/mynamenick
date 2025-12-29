import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import treasure from "../../../assets/treasure.svg";

const PageFour = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Extra Content" pageNumber={4}>
      <p className="text-2xl font-bold text-center">BONUS CONTENT</p>
      <hr className="text-black/30" />
      <div className="flex flex-col gap-5 p-1">
        {/* SECTION ONE */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center">
            <p className="bg-black px-2 py-1 text-[#f7ddb0] font-bold">
              Side Quest
            </p>
            <p className="font-semibold">LI Joe's Youtube Channel (1 year)</p>
          </div>
          <p className="text-sm font-medium">
            Collaborated with LI Joe to manage and grow his online presence by
            editing Twitch VODs for YouTube, designing channel logos and video
            packages, and producing tournament content. Highlights include
            co-running "Beta Bash", one of the first Street Fighter 6 beta
            tournaments, where I created all promotional graphics and developed
            a custom animated scoreboard in After Effects.
          </p>
        </div>
        {/* SECTION TWO */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center ">
            <p className="px-2 py-1 bg-black font-bold text-[#f7ddb0]">
              Special Assignment
            </p>
            <p className="font-bold">
              BMW's National Aftersales Conference (NAC)
            </p>
          </div>
          <p className="text-sm font-medium">
            Twice selected to lead the network setup for BMW's largest North
            American annual event. Oversaw wiring and configuration to ensure
            staff booths and participants had reliable internet access,
            coordinating closely with venue teams and mapping optimal cable
            runs. Balanced this role while also representing one of the
            Aftersales software booths, which supports BMW's flagship diagnostic
            programs.
          </p>
        </div>
        {/* SECTION THREE */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center">
            <p className="bg-black px-2 py-1 font-bold text-[#f7ddb0]">
              Secret Mission
            </p>
            <p className="font-bold">East Coast Throwdown (2009 - 2015)</p>
          </div>
          <p className="text-sm font-medium">
            Grew from volunteer staff to leading all event operations for one of
            the East Coast's premier fighting game tournaments alongside
            SweetJohnnyCage (John Gallagher) and LI Joe (Joe Ciaramelli).
            Successfully directed ECT from end-to-end, managing bracket
            operations, venue coordination, prize distribution, tournament
            logistics, and live stream production. Played a key role in
            establishing ECT as a landmark annual event in the Fighting Game
            Community.
          </p>
        </div>
      </div>
      <img
        src={treasure}
        alt="Nick opens a treasure chest"
        className="size-110 absolute bottom-5 left-45 opacity-20"
      />
    </PageLayout>
  );
});

export default PageFour;
