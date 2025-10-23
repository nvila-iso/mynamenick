import running from "../../assets/running.svg";
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
            <div className="flex justify-center">
              <img src={running} alt="" className="h-10 opacity-40" />
              <img src={running} alt="" className="h-10 opacity-60" />
              <img src={running} alt="" className="h-10" />
            </div>

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
      </ScreenTemplate>
    </>
  );
};

export default Controls;
