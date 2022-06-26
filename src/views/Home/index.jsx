import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants";
import { Carousel } from "flowbite-react";
import { Link } from 'react-router-dom'

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
  <div className="w-4/5 p-2 mx-auto">
    <section className="mb-10">
      <h2 className="text-gray-200 text-3xl mb-4">
        Outstanding and Recomended
      </h2>

      <div className="h-96">
        <Carousel>
          {outstandingGames.map((game, index) => (
            <div key={index} className="grid grid-cols-8 h-full">
              <figure className="col-span-5 h-full bg-red-200">
                <img className="h-full w-full object-cover" src={game.img[0]} />
              </figure>

              <div className="col-span-3 h-full py-2 bg-green-200">
                <h3 className="text-2xl pl-4 mb-2 truncate">{game.title}</h3>

                <div className="grid grid-cols-2 auto-rows-min min-h-52 gap-2">
                  {game.img.slice(0, 5).map((img, index) => (
                    <div key={index} className="h-36 w-full bg-red-200">
                      <img className="w-full h-full object-cover" src={img} />
                    </div>
                  ))}
                </div>

                <div className="pl-4 text-xl">{game.price}$</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>

    <section>
      <h2 className="text-gray-200 text-3xl mb-4">The most sold</h2>

      <div className="grid grid-cols-4 gap-3">
        {outstandingGames.slice(0, 16).map((game, index) => (
          <div className="bg-blue-300 w-full" key={index}>
            <Link to={`/game/${game._id}`}>
              <figure className="w-full h-32 bg-red-400">
                <img className="h-full w-full object-cover" src={game.img[0]}/>
              </figure>
              <div className="h-6 bg-blue-400">
                <span className="justify-self-end">{game.price}$</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default HomeView;
