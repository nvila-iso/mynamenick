import question from "../../assets/question_mark.svg";
import ScreenTemplate from "./ScreenTemplate";

const Experience = () => {
  return (
    <>
      <ScreenTemplate>
        <p className="text-center text-lg">EXPERIENCE LEVELS</p>
        <div
          id="scroll-area"
          className="border-2 border-zinc-500 p-1 rounded-md text-sm flex flex-col gap-2 max-h-screen overflow-auto"
        >
          {/* BONUS */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="w-38 text-center bg-zinc-600 text-[#c2c0bc] px-2 py-1">
                Bonus Stage
              </p>
              <p className="font-bold">
                FullStack Academy <span>(3 months full-time)</span>
              </p>
            </div>
            <p>Certificate in Full-Stack Development</p>
            <hr className="opacity-20" />
          </div>

          {/* FIVE */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="w-23 bg-zinc-600 text-[#c2c0bc] px-2 py-1 text-center">
                Level 5
              </p>
              <p className="font-bold">Muratek (MSP/IT +10yrs)</p>
            </div>
            <p>
              Technical support, management, problem-solving, project planning.
            </p>
            <hr className="opacity-20" />
          </div>
          {/* FOUR */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="w-23 bg-zinc-600 text-[#c2c0bc] px-2 py-1 text-center">
                Level 4
              </p>
              <p className="font-bold">BMW of America (~3 yrs)</p>
            </div>
            <p>
              Technical expertise, professional environment skills,
              organizational / project skills.
            </p>
            <hr className="opacity-20" />
          </div>

          {/* THREE */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="w-23 bg-zinc-600 text-[#c2c0bc] px-2 py-1 text-center">
                Level 3
              </p>
              <p className="font-bold">Sushi Ya & Orchid (5 yrs)</p>
            </div>
            <p>Service, adaptability, multitasking</p>
            <hr className="opacity-20" />
          </div>

          {/* TWO */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="w-23 bg-zinc-600 text-[#c2c0bc] px-2 py-1 text-center">
                Level 2
              </p>
              <p className="font-bold">Journey's Sneakers (~8yrs)</p>
            </div>
            <p>Team leadership, reliability, coordination</p>
            <hr className="opacity-20" />
          </div>

          {/* ONE */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center">
              <p className="w-23 bg-zinc-600 text-[#c2c0bc] px-2 py-1 text-center">
                Level 1
              </p>
              <p className="font-bold">EB Games/Gamestop (+5yrs)</p>
            </div>
            <p>Retail, sales, customer service</p>
            <hr className="opacity-20" />
          </div>

          <img
            src={question}
            id="mobile-question"
            alt="Nick holding a question mark or new quest"
            className="absolute h-50 top-[187px] right-[45px] opacity-20"
          />
        </div>
      </ScreenTemplate>
    </>
  );
};

export default Experience;
