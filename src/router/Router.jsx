import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Drawings from "../page/Drawings";
import Visualization from "../page/Visualization";
import Planning from "../page/Planning";
import Infoproduct from "../page/Infoproduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/drawings",
        element: <Drawings />,
      },
      {
        path: "/visualization",
        element: <Visualization />,
      },
      {
        path: "/planning",
        element: <Planning />,
      },
      {
        path: "/infoproduct",
        element: <Infoproduct />,
      },
    ],
  },
]);