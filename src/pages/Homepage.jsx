import { useState, useEffect } from "react";

import Flipbook from "../components/Flipbook/Flipbook";
import HandheldView from "./HandheldView";

const Homepage = () => {
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

  return isMobile ? <HandheldView /> : <Flipbook />;
};

export default Homepage;
