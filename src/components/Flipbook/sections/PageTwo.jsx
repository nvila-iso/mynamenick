import { forwardRef } from "react";
import PageLayout from "../PageLayout";
import { useCompanyName } from "../../../context/CompanyContext";
import playerProfile from "../../../assets/player_profile.png"
import controller from "../../../assets/controller.svg"

const PageTwo = forwardRef((_, ref) => {
  const { companyName } = useCompanyName();
  return (
    <PageLayout ref={ref} title="Quick Reference" pageNumber={2}>
      <p className="text-2xl font-bold text-center">PLAYER PROFILE</p>
      <hr className="text-black/30" />

      <div className="mt-1 grid grid-cols-[120px_1fr] gap-1 px-1">
        <div className="bg-[#E8C077] rounded-sm border-2 border-black size-30 flex justify-center">
          <img src={playerProfile} alt="nick" className="" />
        </div>
        <div>
          <p>
            <strong>Name: </strong>Nick Vila
          </p>
          <p>
            <strong>Class: </strong>Web Developer, Creative, Customer Service
            Pro
          </p>
          <p>
            <strong>Special Abilities: </strong> Adaptable +4, Creativity +5,
            Communication +4, Passion for Games & Media +MAX
          </p>
        </div>
      </div>
      <div className="px-1">
        <p>
          <strong>Playtime: </strong>20+ years of professional experience across
          retail, food service, IT and recently development
        </p>
        <p>
          <strong>Current Quest: </strong>Join <strong>{companyName}</strong>
        </p>
      </div>
      <hr />
      <div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">CONTROLS</p>
          <img
            src={controller}
            alt="Possibly a snes controller"
            className="size-40 relative bottom-10"
          />
        </div>
        <div className="absolute bottom-35 left-12">
          <p className="font-semibold">Development</p>
          <ul className="text-sm list-disc relative left-6">
            <li>Javascript</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="absolute bottom-10 left-45">
          <p className="font-semibold">Other Tools</p>
          <ul className="text-sm list-disc relative left-6">
            <li>Adobe Suite</li>
            <li>OBS Studio</li>
            <li>Figma</li>
            <li>Twitch & Youtube</li>
          </ul>
        </div>
        <div className="absolute bottom-10 right-50">
          <p className="font-semibold">Soft Skills</p>
          <ul className="text-sm list-disc relative left-6">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Problem Solving</li>
          </ul>
        </div>
        <div className="absolute bottom-45 left-110">
          <p className="font-semibold">Technical Skills</p>
          <ul className="text-sm list-disc relative left-6">
            <li>Windows + Linux OS</li>
            <li>Computer Hardware</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
});

export default PageTwo;
