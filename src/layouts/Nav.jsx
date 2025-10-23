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
      </div>
    </>
  );
};

export default Nav;
