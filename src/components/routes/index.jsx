import { useRoutes } from "react-router-dom";
import HomeView from "../../views/Home";
import LayoutView from "../../views/Layout";

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
        // {
        //   path: "/product/:id",
        //   element: <ProductDetailView />
        // },
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
