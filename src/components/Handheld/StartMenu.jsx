const StartMenu = () => {
  return (
    <>
      <div className="bg-[#c2c0bc] absolute top-20 left-17 border-3 border-black/50 h-60 w-60 z-1">
      <div className="flex flex-col justify-center">
        <p className="text-center">Tap to select</p>
        <div className="grid grid-cols-2">
            <p>Contact</p>
            <p>Colors</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default StartMenu;
