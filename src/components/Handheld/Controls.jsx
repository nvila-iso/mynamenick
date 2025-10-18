import handheld from "../../assets/handheld.svg";
import ScreenTemplate from "./ScreenTemplate";

const Controls = () => {
  return (
    <>
      <ScreenTemplate>
        <p className="text-center text-lg">CONTROLS</p>
        <div className="border-2 border-zinc-500 p-1 rounded-md h-[92%]">
          <form className="flex flex-col gap-1">
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
              <legend className="font-semibold">Development</legend>
              <p className="px-1">
                HTML, CSS, Javascript, React, PostgreSQL, Tailwind CSS
              </p>
            </fieldset>
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
              <legend className="font-semibold">Technical Skills</legend>
              <p className="px-1">
                Windows + Linux OS, Computer Hardware, Networking
              </p>
            </fieldset>
          </form>
          <div
            className="grid grid-cols-[minmax(100px,_1fr)_minmax(60px,_100px)]
 mt-4 gap-1 items-center"
          >
            <div>
              <form className="flex flex-col">
                <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
                  <legend className="font-semibold">Soft Skills</legend>
                  <p className="px-1">
                    Communication, Leadership, Teamwork, Problem Solving
                  </p>
                </fieldset>
                <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
                  <legend className="font-semibold">Other Tools</legend>
                  <p className="px-1">
                    Adobe Suite, OBS Studio, Figma, Twitch & Youtube
                  </p>
                </fieldset>
              </form>
            </div>
            <img
              src={handheld}
              alt=""
              className="contain-fit mx-auto opacity-60"
            />
          </div>
          <form></form>
        </div>
      </ScreenTemplate>
    </>
  );
};

export default Controls;
