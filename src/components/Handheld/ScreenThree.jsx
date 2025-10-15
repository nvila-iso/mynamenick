import controller from "../../assets/controller.svg";

const ScreenThree = () => {
  return (
    <>
      <div className="h-90 p-1">
        <p className="text-center text-lg">CONTROLS</p>
        <div className="border-2 border-zinc-500 p-1 rounded-md">
          <form className="flex flex-col gap-2">
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
              <legend className="font-semibold">Development</legend>
              <p className="px-1">
                Javascript, React, PostgreSQL, Tailwind CSS
              </p>
            </fieldset>
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
              <legend className="font-semibold">Technical Skills</legend>
              <p className="px-1">Windows + Linux OS, Computer Hardware</p>
            </fieldset>
            <img src={controller} alt="" className="h-20 mx-auto" />
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
      </div>
    </>
  );
};

export default ScreenThree;
