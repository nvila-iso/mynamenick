import { useState } from "react";
import Talking from "/src/assets/arms_crossed.svg?react";
import { useCompanyName } from "../../../context/CompanyContext";
import TypeIt from "typeit-react";
import { FaCaretRight } from "react-icons/fa";

const normalSpeed = 30;
const superSpeed = 5;

const OpeningScreen = ({ companyDialogue, setCompanyDialogue, next }) => {
  const { setCompanyName } = useCompanyName();
  const [startTalking, setStartTalking] = useState(false);
  const [textSpeed, setTextSpeed] = useState(normalSpeed);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = fd.get("company");

    setCompanyName(name);
    next();
  };

  return (
    <>
      <div
        id="screen-container"
        className="h-90 flex flex-col gap-2 items-center justify-center"
      >
        <div id="title">
          <p>Nick's Quest to Find a Job</p>
        </div>
        <div id="character">
          <Talking
            className={`size-40 ${startTalking ? "talking" : "quiet"}`}
          />
        </div>
        <div id="dialogue">
          <div className="border border-zinc-500 rounded-xs w-12 text-center mb-1">
            <p>Nick</p>
          </div>
          <div className="flex flex-col h-28 border border-zinc-500 w-70 rounded-xs p-1 ">
            {!companyDialogue ? (
              <button
                className="text-left"
                onClick={() => setCompanyDialogue(true)}
              >
                <TypeIt
                  options={{ speed: 5, lifeLife: true, cursor: false }}
                  getBeforeInit={(instance) => {
                    instance
                      .exec(async () => await setStartTalking(true))
                      .type(
                        `Hey there, I'm Nick! Thanks for visiting. Before you head in, mind dropping your company name? <br /> <span class="tiny">I promise I'm not logging this...</span> <span id="start">&#10151;</span>`
                      )
                      .exec(async () => await setStartTalking(false));

                    return instance;
                  }}
                />
              </button>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center items-center p-1 gap-1"
                >
                  <input
                    name="company"
                    placeholder="Company Name"
                    className="company transition-opacity delay-50000 w-60 h-10 px-2 border-1 rounded-xs relative bg-black/50 text-[#c2c0bc]"
                    required
                  ></input>
                  <div className="company flex flex-col justify-center items-center ">
                    <button className="flex justify-center items-center cursor-pointer">
                      <FaCaretRight
                        id="start"
                        className="size-5 cursor-pointer"
                      />
                      Send it!
                    </button>
                    <button
                      type="button"
                      onClick={() => (next(), setCompanyName(""))}
                      className="flex justify-center items-center cursor-pointer underline"
                    >
                      I'd rather not
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpeningScreen;
