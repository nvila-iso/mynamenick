import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";

import Homepage from "./pages/Homepage";
import Flipbook from "./components/Flipbook/Flipbook";
import HandheldView from "./pages/HandheldView";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      { path: "homepage", Component: Homepage },
      { path: "handheld", Component: HandheldView },
      { path: "flipbook", Component: Flipbook },
      { path: "*", Component: NotFound },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
