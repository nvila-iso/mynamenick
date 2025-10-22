import ScreenTemplate from "./ScreenTemplate";
import instruction from "../../assets/instructions.svg";


const Instructions = () => {
  return (
    <>
      <ScreenTemplate>
        <div className="flex flex-col justify-center items-center h-full">
            <img src={instruction} alt="" />
            <p>Press <strong>A</strong> to continue...</p>
        </div>
      </ScreenTemplate>
    </>
  );
};

export default Instructions;
