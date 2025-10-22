import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";

const RootLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 650);
      };
  
      // Listener
      window.addEventListener("resize", handleResize);
  
      // Remove listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <>
    {isMobile ? "" : <Nav />}
      <main className="min-h-screen w-full grid place-items-center bg-[#DE954D] shadow-md">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
