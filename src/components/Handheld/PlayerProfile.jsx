import { useCompanyName } from "../../context/CompanyContext";
import playerProfile from "../../assets/player_profile.png";
import ScreenTemplate from "./ScreenTemplate";

const PlayerProfile = () => {
  const { companyName } = useCompanyName();
  return (
    <>
      <ScreenTemplate>
        {/*Player Profile*/}
        <p className="text-center text-lg">PLAYER PROFILE</p>

        <div className="flex flex-col gap-2 border-2 border-zinc-500 p-1 rounded-md">
          <div className="flex justify-content gap-2 border-2 border-zinc-500 p-1 rounded-md">
            <div className="min-w-15 min-h-15 max-w-20 rounded-sm border-2 border-zinc-500 flex justify-center">
              <img src={playerProfile} alt="" className="contain-fit" />
            </div>
            <div className="text-sm">
              <p>
                <strong>Name: </strong>Nick Vila
              </p>
              <p>
                <strong>Class: </strong>Web Developer, <br />
                Creative, Customer Service Pro
              </p>
            </div>
          </div>

          {/*Stats*/}
          <div className="border-2 border-zinc-500 p-1 rounded-md text-sm">
            {/*Stats Row */}

            {/* Stat */}
            <div className="flex gap-1 items-center">
              <p>Adaptable +4</p>
              <div className="w-15 h-3 border-2 rounded-lg">
                <div className="w-10 h-2 bg-black/30"></div>
              </div>
            </div>
            {/* Stat */}
            <div className="flex gap-1 items-center">
              <p>Creativity +5</p>
              <div className="w-15 h-3 border-2 rounded-lg">
                <div className="w-12 h-2 bg-black/30"></div>
              </div>
            </div>

            {/* Stat */}
            <div className="flex gap-1 items-center">
              <p>Communication +4</p>
              <div className="w-15 h-3 border-2 rounded-lg">
                <div className="w-10 h-2 bg-black/30"></div>
              </div>
            </div>
            {/* Stat */}
            <div className="flex gap-1 items-center">
              <p>Passion for Games & Media +MAX</p>
              <div className="w-15 h-3 border-2 rounded-lg">
                <div className="w-14 h-2 bg-black/30"></div>
              </div>
            </div>
          </div>
          {/*Special Abilities */}
          <div className="border-2 border-zinc-500 p-1 rounded-md text-sm">
            <p>
              <strong>Playtime: </strong> 20+ years of professional experience
              across retail, food service, IT and recently development.
            </p>
            <p>
              <strong>Current Quest: </strong>Join{" "}
              {companyName ? <strong>{companyName}</strong> : "your company!"}
            </p>
          </div>
          
        </div>
        
      </ScreenTemplate>
    </>
  );
};

export default PlayerProfile;
