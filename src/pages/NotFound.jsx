import running from "../assets/running.svg";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-90 h-full text-center mb-3">
          <p className="text-4xl mb-5">404 <br />Page Not Found</p>
          <img src={running} alt="" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
