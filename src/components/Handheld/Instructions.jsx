import ScreenTemplate from "./ScreenTemplate";
import instruction from "../../assets/instructions.svg";


const Instructions = () => {
  return (
    <>
      <ScreenTemplate>
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-center mb-1">INSTRUCTIONS</p>
            <img src={instruction} alt="" />
            <p id="start">Press <strong>A</strong> to continue...</p>
        </div>
      </ScreenTemplate>
    </>
  );
};

export default Instructions;
