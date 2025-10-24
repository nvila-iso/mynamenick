import { useState } from "react";
import { Link } from "react-router";
import playerProfile from "../../assets/player_profile.png";

const StartMenu = ({ colors, setHandheldColor }) => {
  const [selected, setSelected] = useState("contact");


  return (
    <>
      <div className="bg-[#c2c0bc] absolute inset-x-[20%] inset-y-20 rounded-lg border-3 border-black/50 h-60 w-[60%] z-10">
        <div className="flex flex-col justify-center p-1">
          <p className="text-center">Tap to select</p>
          <hr className="w-[75%] mx-auto" />
          <div className="mt-5 mb-5 flex gap-3 justify-center items-center">
            <button
              id="contact"
              className={
                selected === "contact"
                  ? "bg-black/80 text-[#c2c0bc] p-1 rounded-sm"
                  : ""
              }
              onClick={() => setSelected("contact")}
            >
              Contact Info
            </button>
            <button
              id="colors"
              className={
                selected === "colors"
                  ? "bg-black/80 text-[#c2c0bc] p-1 rounded-sm"
                  : ""
              }
              onClick={() => setSelected("colors")}
            >
              Colors
            </button>
          </div>
          {selected === "contact" && (
            <div className="grid grid-cols-[45px_1fr] gap-1 justify-center items-center">
              <img src={playerProfile} alt="cartoon of nick" className="h-10" />
              <p>nvila88@proton.me</p>

              <img
                src="/linkedin.svg"
                alt="linkedin logo"
                className="mx-auto opacity-80"
              />
              <Link
                to="https://www.linkedin.com/in/nicolas-vila-970717366/"
                target="_blank"
              >
                <p className="cursor-pointer">
                  linkedin.com/in/nicolas-vila-970717366/
                </p>
              </Link>
            </div>
          )}
          {selected === "colors" && (
            <div className="grid grid-cols-3 mx-auto gap-2">
              <button
                id="teal"
                className={`w-10 h-10 ${colors.teal} rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20`}
                onClick={() => setHandheldColor(colors.teal)}
              ></button>
              <button
                id="berry"
                className={`w-10 h-10 ${colors.berry} rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20`}
                onClick={() => setHandheldColor(colors.berry)}
              ></button>
              <button
                id="purple"
                className={`w-10 h-10 ${colors.purple} rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20`}
                onClick={() => setHandheldColor(colors.purple)}
              ></button>
              <button
                id="dandelion"
                className={`w-10 h-10 ${colors.dandelion} rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20`}
                onClick={() => setHandheldColor(colors.dandelion)}
              ></button>
              <button
                id="kiwi"
                className={`w-10 h-10 ${colors.kiwi} rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20`}
                onClick={() => setHandheldColor(colors.kiwi)}
              ></button>
              <button
                id="grape"
                className={`w-10 h-10 ${colors.grape} rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20`}
                onClick={() => setHandheldColor(colors.grape)}
              ></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StartMenu;
