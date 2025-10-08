import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <main className="w-full bg-orange-300">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
