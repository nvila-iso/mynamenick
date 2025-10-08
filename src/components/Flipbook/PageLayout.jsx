import { forwardRef } from "react";

const PageLayout = forwardRef(({ title = "", pageNumber, children }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[640px] h-[600px] bg-[#F7DDB0] overflow-hidden shadow-md font-inter"
    >
      <header className="mt-3 ml-5 w-136 flex items-center px-2 h-12 bg-[#648076] shadow-[5px_5px_0px_rgba(0,0,0,1)] ">
        <h2 className="text-3xl font-extrabold italic text-[#E0B364]">
          <span className="">Nick Vila - </span>
          {title}
        </h2>
        {typeof pageNumber !== "undefined" && (
          <div className="absolute top-3 left-143 px-4 h-12 bg-[#648076] text-[#E0B364] grid place-items-center text-2xl font-extrabold shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            {pageNumber}
          </div>
        )}
      </header>

      <main className="p-4 sm:p-5 h-[calc(600px-48px)] overflow-auto">
        <div className="border-2 border-black/30 rounded-sm w-full h-[98%]">
          {children}
        </div>
      </main>
      {typeof pageNumber === "number" && (
        <div
          className={`pointer-events-none absolute bottom-0
                ${
                  pageNumber % 2
                    ? "right-0 bg-gradient-to-l"
                    : "left-0 bg-gradient-to-r"
                }
                from-black/20 to-transparent w-6 top-0`}
        />
      )}
    </div>
  );
});

export default PageLayout;
