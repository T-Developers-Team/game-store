import { useRoutes } from "react-router-dom";
import HomeView from "../../views/Home";
import LayoutView from "../../views/Layout";
import GameDetailView from "../../views/GameDetail";

const RoutesComponent = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutView />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "/game/:id",
          element: <GameDetailView />
        },
        // {
        //   path: "/about",
        //   element: <AboutUsView />,
        // },
      ],
    },
  ]);

  return element;
};

export default RoutesComponent;
