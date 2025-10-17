import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import { useCompanyName } from "../../../context/CompanyContext";
import seal from "../../../assets/seal.svg";
import { coverLettersJSX } from "../../content/coverLetters.jsx";

const PageOne = forwardRef((_, ref) => {
  const { companyName } = useCompanyName();

  return (
    <PageLayout ref={ref} title="Cover Letter" pageNumber={1}>
      <div className="flex flex-col gap-2 text-sm p-1">
        {!companyName
          ? coverLettersJSX.generic()
          : coverLettersJSX.companyName(companyName)}
      </div>
      <img
        src={seal}
        alt="Nicks seal of approval"
        className="size-50 absolute left-80
      top-102 rotate-340"
      />
    </PageLayout>
  );
});

export default PageOne;
