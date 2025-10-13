import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import scribble from "../../../assets/scribble.svg";
import questionMark from "../../../asset/question_mark.svg";

const PageThree = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Leveling Guide" pageNumber={3}>
      <p className="text-2xl font-bold text-center">EXPERIENCE LEVELS</p>
      <hr className="text-black/30" />
      <div className="px-1 flex flex-col gap-2">
        <p>
          <strong>Level 1: </strong>EB Games/Gamestop (+5yrs): Retail, sales,
          customer service
        </p>
        <p>
          <strong>Level 2: </strong>Journey's Sneakers (~8yrs): Team leadership,
          reliability
        </p>
        <div className="grid grid-cols-[160px_1fr] items-center">
          <img src={scribble} alt="" className="size-40" />
          <div className="flex flex-col gap-2">
            <p>
              <strong>Level 3: </strong>Restaurant Industry (5yrs): Service,
              adaptability, multitasking
            </p>
            <p>
              <strong>Level 4: </strong>Network Engineer / QA Tester (~3yrs):
              Technical expertise, professional environment skills,
              organizational / project skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 mt-2">
          <p>
            <strong>Level 5: </strong>MSP/IT (+10yrs): Technical support,
            management, problem-solving, project planning.
          </p>
          <p className="w-96">
            <strong>Bonus Stage: </strong>FullStack Academy (3 months
            full-time): Certificate in Fullstack development, team coordination,
            logging / documentation.
          </p>
        </div>
        <img
          src={questionMark}
          alt=""
          className="size-50 absolute right-5 bottom-5"
        />
      </div>
    </PageLayout>
  );
});

export default PageThree;
