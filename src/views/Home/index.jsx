import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import { Carousel } from "flowbite-react";

const HomeView = () => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      const product_url = `${API_URL}/games`;

      const products_request_params = {
        method: "get",
        headers: {
          "content-type": "application/json",
          "access-control-allow-headers": "content-type",
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "options,post,get,put,delete",
        },
      };
      const response = await fetch(product_url, products_request_params);
      const productsdata = await response.json();
      console.log(productsdata);
      setGameList(productsdata);
    };
    getproducts();
  }, []);

  return <OutstandingSection outstandingGames={gameList} />;
};

const OutstandingSection = ({ outstandingGames }) => (
  <div className="w-3/5 p-2 mx-auto">
    <h2 className="text-gray-200">Outstanding and Recomended</h2>

    <div className="h-80">
      <Carousel>
        {outstandingGames.map((game) => (
          <div className="grid grid-cols-8 h-full">
            <figure className="col-span-5 h-full bg-red-200">
              <img className="h-full w-full object-cover" src={game.img[0]} />
            </figure>

            <div className="col-span-3 h-full py-2 bg-green-200">
              <h3 className="text-2xl pl-4 mb-2 truncate">{game.title}</h3>

              <div className="grid grid-cols-2 auto-rows-min min-h-52 gap-2 px-2 bg-blue-50">
                {game.img.slice(0, 5).map((img) => (
                  <div className="bg-red-800">
                    <img className="w-5/6 h-full mx-auto" src={img} />
                  </div>
                ))}
              </div>

              <div className="pl-4 text-xl">{game.price}$</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default HomeView;
