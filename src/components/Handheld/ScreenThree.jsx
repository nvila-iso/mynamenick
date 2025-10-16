import handheld from "../../assets/handheld.svg";

const ScreenThree = () => {
  return (
    <>
      <div className="h-90 p-1">
        <p className="text-center text-lg">CONTROLS</p>
        <div className="border-2 border-zinc-500 p-1 rounded-md h-[92%]">
          <form className="flex flex-col gap-5">
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
              <legend className="font-semibold">Development</legend>
              <p className="px-1">
                HTML, CSS, Javascript, React, PostgreSQL, Tailwind CSS
              </p>
            </fieldset>
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm">
              <legend className="font-semibold">Technical Skills</legend>
              <p className="px-1">Windows + Linux OS, Computer Hardware, Networking</p>
            </fieldset>

            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm w-50">
              <legend className="font-semibold">Soft Skills</legend>
              <p className="px-1">
                Communication, Leadership, Teamwork, Problem Solving
              </p>
            </fieldset>
            <fieldset className="border-1 border-zinc-500 text-sm rounded-sm w-50">
              <legend className="font-semibold">Other Tools</legend>
              <p className="px-1">
                Adobe Suite, OBS Studio, Figma, Twitch & Youtube
              </p>
            </fieldset>
          </form>
          <img
            src={handheld}
            alt=""
            className="relative left-25 bottom-35 h-35 mx-auto opacity-60"
          />
        </div>
      </div>
    </>
  );
};

export default ScreenThree;

//            <img src={handheld} alt="" className="h-20 mx-auto" />
