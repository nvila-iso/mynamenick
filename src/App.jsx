import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";

import Homepage from "./pages/Homepage";
import Greeting from "./pages/Greeting";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Greeting },
      { path: "homepage", Component: Homepage },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
