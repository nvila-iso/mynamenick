import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";

import Homepage from "./pages/Homepage";
import Greeting from "./pages/Greeting";
import HandheldView from "./pages/HandheldView";
import ScreenOne from "./components/Handheld/ScreenOne";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Greeting },
      { path: "homepage", Component: Homepage },
      { path: "handheld", Component: HandheldView },
      { path: "screenone", Component: ScreenOne },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
