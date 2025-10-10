import { useState } from "react";
import Typewriter from "../hooks/useTypewriter";
import Talking from "/src/assets/arms_crossed.svg?react";

const context = [
  "Hii! Thanks for coming to my page.",
  "Before we move on, can you please enter your company name?",
  "I promise I'm not storing this!",
];

const Greeting = () => {
  const [startTalking, setStartTalking] = useState(false);
  const [sentence, setSentence] = useState(context[0]);

  // const talking = () => {
  //   if (startTalking === true) {
  //     setStartTalking(false);
  //   } else {
  //     setStartTalking(true);
  //   }
  // };

  return (
    <>
      <div className="flex">
        <div className="grid grid-rows-[1fr] speech-bubble p-1 relative bottom-23">
          <Typewriter
            text={sentence}
            onTypingChange={(b) => setStartTalking(b)}
          />
          <div className="flex justify-between px-2">
            <button>prev</button>
            <button>next</button>
          </div>
        </div>
        <Talking
          className={`size-50 md:size-60 lg:size-80 ${
            startTalking ? "talking" : "quiet"
          }`}
        />
      </div>
    </>
  );
};

export default Greeting;
