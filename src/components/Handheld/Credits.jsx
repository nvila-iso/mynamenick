import { useState } from "react";
import Waving from "/src/assets/wave_animation.svg?react";
import TypeIt from "typeit-react";

const Credits = () => {
  const [startTalking, setStartTalking] = useState(false);
  return (
    <>
      <div className="h-90 p-1">
        <p className="text-center text-lg">THANK YOU FOR PLAYING!</p>
        <div id="character">
          <Waving
            className={`waving size-40`}
          />
        </div>
        <div id="dialogue">
          <div className="border border-zinc-500 rounded-xs w-12 text-center mb-1">
            <p>Nick</p>
          </div>
          <div className="flex flex-col h-28 border border-zinc-500 w-70 rounded-xs p-1 ">
            <TypeIt
              options={{ speed: 5, lifeLife: true, cursor: false }}
              getBeforeInit={(instance) => {
                instance
                  .exec(async () => await setStartTalking(true))
                  .type(
                    `Your curiosity and creativity keep the pixels glowing. Game on and don't forget to save your progress.`
                  )
                  .exec(async () => await setStartTalking(false));

                return instance;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
