import { useState } from "react";
import Waving from "/src/assets/wave_animation.svg?react";
import TypeIt from "typeit-react";
import ScreenTemplate from "./ScreenTemplate";

const Credits = () => {
  const [startTalking, setStartTalking] = useState(false);
  const [startWaving, setStartWaving] = useState(false);
  return (
    <>
      <ScreenTemplate>
        <div className="h-90 p-1 flex flex-col justify-center items-center">
          <p className="text-center text-lg">THANK YOU FOR PLAYING!</p>

          <Waving
            className={`${startWaving ? "waving" : "still"} h-42 w-42 ${
              startTalking ? "talking" : "quiet"
            } relative right-5 top-8`}
          />

          <div id="dialogue">
            <div className="border border-zinc-500 rounded-xs w-12 text-center mb-1">
              <p>Nick</p>
            </div>
            <div className="flex flex-col h-28 border border-zinc-500 w-70 rounded-xs p-1 ">
              <TypeIt
                options={{ speed: 5, lifeLife: true, cursor: false }}
                getBeforeInit={(instance) => {
                  instance
                    .exec(async () => await setStartWaving(false))
                    .exec(async () => await setStartTalking(true))
                    .type(
                      `Your curiosity and creativity keep the pixels glowing. Game on and don't forget to save your progress. `
                    )
                    .exec(async () => await setStartTalking(false))
                    .pause(500)
                    .exec(async () => await setStartTalking(true))
                    .type(
                      `<br /><span class="tiny">Also check out the <strong>Start Menu</strong> for contact info!</span>`
                    )
                    .exec(async () => await setStartTalking(false))
                    .exec(async () => await setStartWaving(true));

                  return instance;
                }}
              />
            </div>
          </div>
        </div>
      </ScreenTemplate>
    </>
  );
};

export default Credits;
