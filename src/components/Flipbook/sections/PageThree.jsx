import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import scribble from "../../../assets/scribble.svg";
import questionMark from "../../../assets/question_mark.svg";

const PageThree = forwardRef((_, ref) => {
  return (
    <PageLayout ref={ref} title="Leveling Guide" pageNumber={3}>
      <p className="text-2xl font-bold text-center">EXPERIENCE LEVELS</p>
      <hr className="text-black/30" />
      <div className="px-1 flex flex-col gap-2 mt-1">
        <div className="flex flex-col">
          <p className="text-lg font-bold">
            <span className="bg-black text-[#F7DDB0] px-2 py-1 mr-1">
              Level 5
            </span>
            Muratek (MSP/IT +10yrs)
            <br />
          </p>
          <p>
            Technical support, management, problem-solving, project planning.
          </p>
        </div>

        <div className="grid grid-cols-[160px_1fr] items-center">
          <img src={scribble} alt="" className="size-40" />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <p className="text-lg font-bold">
                <span className="bg-black px-2 py-1 mr-1 text-[#F7DDB0]">
                  Level 4
                </span>
                BMW of America (~3 yrs)
              </p>
              <p>
                Technical expertise, professional environment skills,
                organizational / project skills.
              </p>
            </div>
            <p className="font-bold text-lg">
              <span className="bg-black px-2 py-1 mr-1 text-[#F7DDB0]">
                Level 3
              </span>
              Sushi Ya & Orchid (5 yrs){" "}
              <span className="font-normal text-xs">(restaurants)</span>
            </p>
            <p>Service, adaptability, multitasking</p>

            <p className="font-bold text-lg">
              <span className="bg-black px-2 py-1 mr-1 text-[#F7DDB0]">
                Level 2
              </span>
              Journey's Sneakers (~8yrs)
            </p>
            <p>Team leadership, reliability, coordination</p>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <p className="font-bold text-lg">
            <span className="bg-black px-2 py-1 mr-1 text-[#F7DDB0]">
              Level 1
            </span>
            EB Games/Gamestop (+5yrs)
          </p>
          <p>Retail, sales, customer service</p>
          <p className="w-sm font-bold text-lg mt-3">
            <span className="bg-black px-2 py-1 mr-1 text-[#F7DDB0]">
              Bonus Stage
            </span>
          </p>
          <p className="font-bold text-lg">
            FullStack Academy {" "}
            <span className="text-sm">(3 months full-time)</span>
          </p>
          <p className="w-md">
            Certificate in Fullstack development, team coordination, logging /
            documentation.
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
