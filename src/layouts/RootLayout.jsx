import { Outlet } from "react-router";
import Nav from "./Nav";

const RootLayout = () => {
  return (
    <>
      <Nav/>
      <main className="min-h-screen w-full grid place-items-center bg-[#DE954D] shadow-md">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
