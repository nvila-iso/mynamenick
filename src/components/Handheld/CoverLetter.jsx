import { useCompanyName } from "../../context/CompanyContext";
import { coverLettersJSX } from "../content/coverLetters";
import { FaHandPointDown } from "react-icons/fa";
import ScreenTemplate from "./ScreenTemplate";
import { useEffect, useState, useRef } from "react";

const CoverLetter = () => {
  const { companyName } = useCompanyName();
  const [hideHint, setHideHint] = useState(false);

  useEffect(() => {
    const dismiss = () => {
      setHideHint(true);
    };

    window.addEventListener("scroll", dismiss, true);
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchmove", dismiss, { passive: true });

    return () => {
      window.removeEventListener("scroll", dismiss, true);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchmove", dismiss);
    };
  }, []);

  return (
    <ScreenTemplate>
      <div
        id="scroll-area"
        className="max-h-screen overflow-auto flex flex-col gap-2 text-sm relative"
      >
        {!companyName
          ? coverLettersJSX.generic()
          : coverLettersJSX.companyName(companyName)}

        <div
          className={`absolute left-43 bottom-55 text-3xl animate-bounce text-black transition-opacity duration-300 ${
            hideHint ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <FaHandPointDown />
        </div>
      </div>
    </ScreenTemplate>
  );
};

export default CoverLetter;
