import LiJoe from "./ExtraContent/LiJoe";
import BMW from "./ExtraContent/BMW";
import ECT from "./ExtraContent/ECT";
import ContentOptions from "./ExtraContent/ContentOptions";
import { useState } from "react";
import ScreenTemplate from "./ScreenTemplate";

const SideQuest = () => {
  const [activeQuest, setActiveQuest] = useState("ContentOptions");

  return (
    <>
      <ScreenTemplate>
        <p className="text-center">SIDE QUESTS / BONUS CONTENT</p>
        <div className="border-2 border-zinc-500 p-1 rounded-md text-sm h-[90%]">
          {activeQuest === "ContentOptions" && (
            <ContentOptions setActiveQuest={setActiveQuest} />
          )}
          {activeQuest === "ECT" && <ECT setActiveQuest={setActiveQuest} />}
          {activeQuest === "BMW" && <BMW setActiveQuest={setActiveQuest} />}
          {activeQuest === "LiJoe" && <LiJoe setActiveQuest={setActiveQuest} />}
        </div>
      </ScreenTemplate>
    </>
  );
};

export default SideQuest;
