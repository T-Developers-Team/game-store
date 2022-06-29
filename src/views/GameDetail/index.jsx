import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import { UserGroupIcon } from "@heroicons/react/solid";

const GameDetailView = () => {
  const { id } = useParams();
  const [game, setGame] = useState({ img: [], tags: [] });
  const [selectedImg, setSelectedImg] = useState();

  useEffect(() => {
    const getGame = async () => {
      const PRODUCT_URL = `${API_URL}/games/find/${id}`;

      const PRODUCTS_REQUEST_PARAMS = {
        metho: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
        },
      };
      const response = await fetch(PRODUCT_URL, PRODUCTS_REQUEST_PARAMS);
      const gameData = await response.json();
      console.log("game", gameData);

      setGame(gameData);
      setSelectedImg(gameData.img[0]);
    };

    getGame();
  }, [id]);

  const formatDate = (date) => {
    let datetoFormat = new Date(date);
    let formatOptions = { day: "2-digit", month: "short", year: "numeric" };
    return datetoFormat.toLocaleDateString("en-US", formatOptions);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <section className="w-full min-h-96">
        <div className="flex justify-between pb-4">
          <h2 className="text-3xl text-white">{game.title}</h2>
          <button className="hover:bg-sky-500/100 bg-sky-500/25 text-sky-300 rounded px-4 py-1.5 hover:text-white">
            Community Hub
          </button>
        </div>

        {/*Left Section*/}
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <figure className="bg-red-700">
              <img className="w-full h-full object-cover" src={selectedImg} />
            </figure>
            <div className="grid grid-cols-5 gap-2 py-4">
              {game.img.map((img, index) => (
                <figure
                  key={index}
                  className={`bg-green-300 ${
                    selectedImg === img ? "border-4 border-white" : ""
                  }`}
                  onClick={() => setSelectedImg(img)}
                >
                  <img className="w-full h-full" src={img} />
                </figure>
              ))}
            </div>
          </div>

          {/*Right Section*/}
          <div className="col-span-1 pl-4 text-base text-gray-300">
            <figure className="pb-4">
              <img className="h-full w-full" src={game.portrait} />
            </figure>
            <p className="text-justify pb-4">{game.desc}</p>
            <div className="grid grid-cols-3 text-sm text-gray-600">
              <p className="col-span-1 uppercase pb-4">Release Date:</p>
              <p className="col-span-2 text-gray-400">
                {formatDate(game.releasedate)}
              </p>
              <p className="col-span-1 uppercase">Developer:</p>
              <p className="col-span-2 text-sky-300">{game.publisher}</p>
              <p className="col-span-1 uppercase">Publisher:</p>
              <p className="col-span-2 text-sky-300 pb-4">{game.publisher}</p>

              <div className="col-span-3">
                Popular user-defindetags for this product:
                <div className="flex gap-1 text-xs mt-1">
                  {game.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="hover:bg-sky-500/100 bg-sky-500/25 text-sky-300 rounded hover:text-white px-1.5 py-0.5"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-8">
        <div className="grid grid-cols-3 gap-3">
          {/* Left Side | Purchase section */}
          <div className="col-span-2">
            {/* Purchase Card */}
            <div className="h-24 p-4 mb-8 rounded-md bg-gradient-to-r from-slate-700 to-slate-500 relative">
              <span className="text-2xl text-white font-semibold">
                Buy {game.title}
              </span>
              <div className="h-8 grid justify-items-stretch absolute -bottom-3 right-4">
                <div className="h-full p-0.5 bg-black rounded justify-self-end flex">
                  <div className="text-cyan-400 text-justify my-auto mx-2">
                    $/{game.price}
                  </div>
                  <button className="bg-gradient-to-r from-lime-500 to-lime-700 hover:from-lime-400 hover:via-lime-500 hover:to-lime-600 text-white rounded px-2.5 py-1">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white uppercase">About this game</h4>
              <hr className="mt-1 mb-4 bg-blue-500" />
              <p className="text-slate-400">{game.about}</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-1">
            <div className="bg-gradient-to-r from-slate-900 to-gray-900 p-4 mb-4">
              {game.tags.map((tag, index) => (
                <div key={index} className="w-full grid grid-cols-12 mb-0.5">
                  <div className="col-span-2 bg-slate-800 py-0.5">
                    <UserGroupIcon className="h-5 w-5 m-auto text-white" />
                  </div>
                  <span className="col-span-10 text-cyan-500 bg-cyan-900 pl-2">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-r from-slate-900 to-gray-900">
              <div className="text-slate-400">TITLE: <span className="text-slate-500">{game.title}</span></div>
              <div className="text-slate-400">GENRE: <span className="text-cyan-500">{game.genre}</span></div>
              <div className="text-slate-400">PUBLISHER: <span className="text-cyan-500">{game.publisher}</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameDetailView;
