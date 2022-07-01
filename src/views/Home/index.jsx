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
  <div className="max-w-5xl mx-auto">
    <section className="mb-8">
      <h2 className="text-gray-200 text-3xl">
        Outstanding and Recomended
      </h2>

      <div className="h-96">
        <Carousel>
          {outstandingGames.map((game, index) => (
            <div key={index} className="grid grid-cols-8 bg-black/25 gap-4">
              <figure className="col-span-5 my-auto">
                <Link to={`/game/${game._id}`}>
                  <img className="h-full w-full" src={game.portrait} />
                </Link>
              </figure>

              <div className="col-span-3 h-full py-3 text-white mr-4">
                <h3 className="text-2xl mb-2 truncate">{game.title}</h3>

                <div className="grid grid-cols-2 auto-rows-min gap-2 mb-2">
                  {game.img.slice(0, 4).map((img, index) => (
                    <div key={index} className=" w-full">
                      <img className="w-full h-full object-cover" src={img} />
                    </div>
                  ))}
                </div>

                <div className="text-xl float-right">${game.price}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>

    <section>
      <h2 className="text-gray-200 text-3xl mb-4">The most sold</h2>

      <div className="grid grid-cols-4 gap-3">
        {outstandingGames.slice(0, 12).map((game, index) => (
          <div className="w-full" key={index}>
            <Link key={index} reloadDocument={true} to={`/game/${game._id}`}>
              <div className="text-sm">
                <figure className="mb-1">
                  <img className="w-full h-full" src={game.portrait}/>
                </figure>
                <div className=" grid justify-items-stretch">
                  <div className="justify-self-end bg-black/25 px-2 py-0.5">
                    <p className="text-gray-300 text-right">${game.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default HomeView;
