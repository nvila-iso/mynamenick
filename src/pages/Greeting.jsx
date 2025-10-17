import { useState } from "react";
import { useNavigate, Link } from "react-router";
import TypeIt from "typeit-react"; // https://www.typeitjs.com/
import Talking from "/src/assets/arms_crossed.svg?react";
import { useCompanyName } from "../context/CompanyContext";
import { FaCaretRight } from "react-icons/fa";
import Flipbook from "../components/Flipbook/Flipbook.jsx";

const Greeting = () => {
  const { setCompanyName } = useCompanyName();
  const [startTalking, setStartTalking] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const name = fd.get("company");

    setCompanyName(name);
    navigate("/flipbook");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-90 h-24 text-center mb-3">
          <TypeIt
            options={{ speed: 30, lifeLife: true }}
            getBeforeInit={(instance) => {
              instance
                .exec(async () => await setStartTalking(true))
                .type("Hey there, I'm Ncik.")
                .exec(async () => await setStartTalking(false))
                .pause(650)
                .delete(4)
                .pause(500)
                .exec(async () => await setStartTalking(true))
                .type(
                  `ick! Thanks for visiting. Before you head in, mind dropping your company name? <br /> <span class="tiny">I promise I'm not logging this...</span>`
                )
                .exec(async () => await setStartTalking(false))
                .exec(async () => await setShowInput(true));

              return instance;
            }}
          />
        </div>
        <Talking className={`size-80 ${startTalking ? "talking" : "quiet"}`} />
        <div className="w-60 h-12">
          {!showInput ? (
            <>
              <div className="text-center">
                <button
                  onClick={() => setShowInput(true)}
                  className="underline cursor-pointer"
                >
                  skip text
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                name="company"
                placeholder="Company Name"
                className="company transition-opacity delay-50000 w-60 h-12 px-2 border-3 border-black rounded-sm relative bottom-[3px]"
                required
              ></input>
              <div className="company flex flex-col justify-center items-center ">
                <button className="flex justify-center items-center cursor-pointer">
                  <FaCaretRight id="start" className="size-5 cursor-pointer" />
                  Send it!
                </button>
                <Link to="/flipbook">
                  <button className="flex justify-center items-center cursor-pointer underline">
                    I'd rather not
                  </button>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Greeting;
