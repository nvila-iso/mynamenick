import { useCompanyName } from "../../context/CompanyContext";
import { coverLettersJSX } from "../content/coverLetters";

const ScreenOne = () => {
  const { companyName } = useCompanyName();
  return (
    <>
      <div className="flex flex-col gap-2 text-sm p-1 h-89 overflow-auto scroll-smooth">
        {!companyName
          ? coverLettersJSX.generic()
          : coverLettersJSX.companyName(companyName)}
      </div>
    </>
  );
};

export default ScreenOne;

//Dev Notes: Add a scroll down indicator

