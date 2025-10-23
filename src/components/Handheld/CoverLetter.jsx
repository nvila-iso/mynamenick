import { useCompanyName } from "../../context/CompanyContext";
import { coverLettersJSX } from "../content/coverLetters";
import ScreenTemplate from "./ScreenTemplate";

const CoverLetter = () => {
  const { companyName } = useCompanyName();
  return (
    <>
      <ScreenTemplate>
        <div id="scroll-area" className="max-h-screen overflow-auto flex flex-col gap-2 text-sm">
          {!companyName
            ? coverLettersJSX.generic()
            : coverLettersJSX.companyName(companyName)}
        </div>
      </ScreenTemplate>
    </>
  );
};

export default CoverLetter;

//Dev Notes: Add a scroll down indicator
