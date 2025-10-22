import head from "../assets/nav_icon.svg";
import { Link } from "react-router";

const Nav = () => {
  return (
    <>
      <div className="flex gap-5 w-full items-center p-1 absolute">
        <div>
          <Link to="/">
            <img src={head} alt="Nick's Head" className="head-shadow size-25" />
          </Link>
        </div>
        <div className="flex gap-3">
          <Link to="https://www.linkedin.com/in/nicolas-vila-970717366/">
            <img src="/linkedin.svg" alt="linkedin logo" className="h-12 opacity-70 hover:opacity-100 head-shadow"/>
          </Link>
          <Link to="https://github.com/nvila-iso">
            <img src="/github.svg" alt="github logo" className="h-12 opacity-70 hover:opacity-100 head-shadow"/>
          </Link>
        </div>
        {/* <div className="flex justify-center items-center gap-1">
          <button
            id="teal"
            className="w-10 h-10 bg-[#008B8B] rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20"
          ></button>
          <button
            id="berry"
            className="w-10 h-10 bg-[#B3013B] rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20"
          ></button>
          <button
            id="purple"
            className="w-10 h-10 bg-[#a78cb7] rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20"
          ></button>
          <button
            id="dandelion"
            className="w-10 h-10 bg-[#F2C300] rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20"
          ></button>
          <button
            id="kiwi"
            className="w-10 h-10 bg-[#8DBA24] rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20"
          ></button>
          <button
            id="grape"
            className="w-10 h-10 bg-[#6B57A7] rounded-sm border-1 border-black/20 hover:border-3 hover:border-black/30 hover:inset-shadow-sm inset-shadow-black/20"
          ></button>
        </div> */}
      </div>
    </>
  );
};

export default Nav;
