import LiJoe from "./ExtraContent/LiJoe";
import BMW from "./ExtraContent/BMW";
import ECT from "./ExtraContent/ECT";
import ContentOptions from "./ExtraContent/ContentOptions";
import { useState } from "react";

const SideQuest = () => {
  const [activeQuest, setActiveQuest] = useState("ContentOptions");

  return (
    <>
      <div className="h-90 p-1 ">
        <p className="text-center text-lg">SIDE QUESTS / BONUS CONTENT</p>
        <div className="border-2 border-zinc-500 p-1 rounded-md text-sm h-[92%] flex justify-center items-center">
          {activeQuest === "ContentOptions" && (
            <ContentOptions setActiveQuest={setActiveQuest} />
          )}
          {activeQuest === "LiJoe" && <LiJoe setActiveQuest={setActiveQuest} />}
          {activeQuest === "BMW" && <BMW setActiveQuest={setActiveQuest} />}
          {activeQuest === "ECT" && <ECT setActiveQuest={setActiveQuest} />}
        </div>
      </div>
    </>
  );
};

export default SideQuest;
