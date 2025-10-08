import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <main className="min-h-screen w-full grid place-items-center bg-[#DE954D] shadow-md">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
