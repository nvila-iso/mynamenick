import Flipbook from "../components/Flipbook/Flipbook";

const Homepage = () => {
  return (
    <div id="book-container" className="flex flex-col gap-3">
      <Flipbook />
      <div className="flex justify-center">
        {/* <img src="/LinkedIn_icon.webp" alt="" /> */}
      </div>
    </div>
  );
};

export default Homepage;
