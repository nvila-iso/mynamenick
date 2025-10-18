// HandheldScreen.jsx
const ScreenTemplate = ({
  id = "screen-container",
  children,
  className = "",
}) => {
  return (
    <div
      id={id}
      className={[
        "w-[80vw] max-w-[649px] mx-auto",
        // "min-h-[50dvh] max-h-[86dvh]",
        "flex flex-col items-center justify-center",
        "p-2 sm:p-3 gap-2 sm:gap-3",
        "overflow-hidden",
        className,
      ].join(" ")}
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        id="scroll-area"
        className="w-full h-90 overflow-y-auto scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
};

export default ScreenTemplate;
