import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import treasure from "../../../assets/treasure.svg";

const PageFour = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Extra Content" pageNumber={4}>
      <p className="text-2xl font-bold text-center">BONUS CONTENT</p>
      <hr className="text-black/30" />
      <div className="flex flex-col gap-2 px-1">
        <p>
          <strong>Side Quest: </strong>
          <span className="italic">LIJoe's Youtube Channel (1 year)</span>{" "}
          <br />
          Collaborated with LIJoe to manage and grow his online presence by
          editing Twitch VODs for Youtube, designing channel logos and video
          packages, and producing tournament content. Highlights include
          co-running "Beta Bash", one of the first Street Fighter V beta
          tournaments, where I created all promotional graphics and developed a
          custom animated scoreboard in After Effects.
        </p>
        <p>
          <strong>Special Assignment: </strong>
          <span className="italic">
            BMW National Aftersales Conference (NAC)
          </span>
          <br />
          Selected twice to lead the network setup for BMW's largest North
          American annual event. Oversaw wiring and configuration to ensure
          staff booths and participants had reliable internet access,
          coordinating closely with venue teams and mapping optimal cable runs.
          Balanced this role while also representing one of the Aftersales
          software booth, which supports BMW's flagship diagnostic programs
        </p>
        <p>
          <strong>Secret Mission: </strong>
          <span className="italic">East Coast Throwdown (2009 - 2015)</span>
          <br />
          Assisted (and ran 1) in organizing one of the East Coast's premier
          fighting game tournaments alongside SweetJohnnyCage (John Gallagher)
          and LIJoe (Joe Ciaramelli). Contributed to bracket running, venue
          coordination, prize distribution, tournament logistics, and live
          stream production, helping establish ECT as a historical event in the
          FGC.
        </p>
      </div>
      <img
        src={treasure}
        alt="Nick opens a treasure chest"
        className="size-110 absolute bottom-5 left-45"
      />
    </PageLayout>
  );
});

export default PageFour;
