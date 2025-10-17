import question from "../../assets/question_mark.svg";

const Experience = () => {
  return (
    <>
      <div className="h-90 p-1 ">
        <p className="text-center text-lg">EXPERIENCE LEVELS</p>
        <div className="border-2 border-zinc-500 p-1 rounded-md text-sm h-[92%] flex flex-col gap-2 overflow-auto scroll-smooth">
          <div className="flex items-center gap-2">
            <p className="bg-zinc-600 text-[#c2c0bc] p-1">Level 1</p>
            <p>
              <strong>EB Games / Gamestop (5+ years)</strong>
            </p>
          </div>
          <p>Retail, Sales, Customer Service</p>
          <hr className="opacity-20" />
          <div className="flex items-center gap-2">
            <p className="bg-zinc-600 text-[#c2c0bc] p-1">Level 2</p>
            <p>
              <strong>Journey's Sneakers (8 years)</strong>
            </p>
          </div>
          <p>Team Leadership, Reliability</p>
          <hr className="opacity-20" />
          <div className="flex items-center gap-2">
            <p className="bg-zinc-600 text-[#c2c0bc] p-1">Level 3</p>
            <p>
              <strong>Restaurant Industry (5 years)</strong>
            </p>
          </div>
          <p>Service, Adaptability, Multitasking</p>
          <hr className="opacity-20" />
          <div className="flex items-center gap-2">
            <p className="bg-zinc-600 text-[#c2c0bc] p-1">Level 4</p>
            <p>
              <strong>Network Engineer / QA (3 years)</strong>
            </p>
          </div>
          <p>
            Technical Expertise, Professional Environment Skills,
            Organizational/Project Skills
          </p>
          <hr className="opacity-20" />
          <div className="flex items-center gap-2">
            <p className="bg-zinc-600 text-[#c2c0bc] p-1">Level 5</p>
            <p>
              <strong>MSP/IT (10+ years)</strong>
            </p>
          </div>
          <p>Technical Support, Management, Problem-Solving</p>
          <hr className="opacity-20" />
          <div className="flex items-center gap-2">
            <p className="bg-zinc-600 text-[#c2c0bc] p-1">Bonus Stage</p>
            <p>
              <strong>FullStack Academy</strong>
            </p>
          </div>
          <p>Certificate in Full-Stack Development</p>
          <img
            src={question}
            id="mobile-question"
            alt="Nick holding a question mark or new quest"
            className="absolute h-50 top-[187px] right-[45px] opacity-20"
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
