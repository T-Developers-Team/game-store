import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import { FaUserAlt } from "react-icons/fa"

const txtLabelLinks = [
  "Visit the website", "View update history", "Read related news", "View discussions", "Find Community Groups"
]

const GameDetailView = () => {
  const { id } = useParams();
  const [game, setGame] = useState({img: [], tags: [], categories: []});
  const [genreGames, setGenreGames] = useState([]);
  const [selectedImg, setSelectedImg] = useState()

  useEffect(() => {
    const getGenreGames = async (genre) => {
      const PRODUCT_URL = `${API_URL}/games?genre=${genre}`;

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
      const gamesData = await response.json();
      let gamesDataFiltered = []

      for (let index = 0; index < gamesData.length; index++) {
        if (gamesData[index]._id != id) {
          gamesDataFiltered.push(gamesData[index])
        }
      }
      setGenreGames(gamesDataFiltered.slice(0,3))
    }

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

      setGame(gameData);
      setSelectedImg(gameData.img[0]);
      getGenreGames(gameData.genre)
    };

    getGame();
  }, [id]);

  const formatDate = (date) => {
    let datetoFormat = new Date(date);
    let formatOptions = { day: "2-digit", month: "short", year: "numeric" };
    return datetoFormat.toLocaleDateString("en-US", formatOptions);
  };

  const splitParagraphs = (paragraph, separator) => {
    const arrParagraph = paragraph.split(separator)
    return arrParagraph
  }

  return (
    <div className="max-w-5xl mx-auto">
      <section className="w-full min-h-96">
        <div className="flex justify-between pb-4">
          <h2 className="text-3xl text-white">{game.title}</h2>
          <button className='hover:bg-sky-500/50 bg-sky-500/25 text-sky-300 rounded px-4 py-1.5 hover:text-white'>Community Hub</button>
        </div>
        <div className="grid grid-cols-3 bg-black/25">
          {/*Left Section*/}
          <div className="col-span-2">
            <figure className="">
              <img className="w-full h-full object-cover" src={selectedImg}/>
            </figure>
            <div className="grid grid-cols-5 gap-2 py-2">
              {
                game.img.map((img, index) => <figure key={index} className={`cursor-pointer bg-green-300 ${selectedImg === img ? 'border-4 border-white' : ''}`} onClick={() => setSelectedImg(img)}>
                  <img className="w-full h-full" src={img}/>
                </figure>)
              }
            </div>
          </div>

          {/*Right Section*/}
          <div className="col-span-1 pl-4 text-base text-gray-300">
            <figure className="pb-4">
              <img className="h-full w-full" src={game.portrait} />
            </figure>
            <div className="pr-4">
              <p className="text-justify pb-4">{game.desc}</p>
              <div className="grid grid-cols-3 text-xs text-gray-600">
                <p className="col-span-1 uppercase pb-4">Release Date:</p>
                <p className="col-span-2 text-gray-400 text-sm">{formatDate(game.releasedate)}</p>
                <p className="col-span-1 uppercase">Developer:</p>
                <p className="col-span-2 text-sky-300 text-sm">{game.publisher}</p>
                <p className="col-span-1 uppercase">Publisher:</p>
                <p className="col-span-2 text-sky-300 pb-4 text-sm">{game.publisher}</p>

                <div className="col-span-3">
                  Popular user-defindetags for this product:
                  <div className="flex gap-1 text-xs mt-1 flex-wrap">
                    { game.tags.map((tag, index) =>
                      <button key={index} className="hover:bg-sky-500/50 bg-sky-500/25 text-sky-300 rounded hover:text-white px-1.5 py-0.5">
                        {tag}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-6">
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
                    $ {game.price}
                  </div>
                  <button className="bg-gradient-to-r from-lime-500 to-lime-700 hover:from-lime-400 hover:via-lime-500 hover:to-lime-600 text-white rounded px-2.5 py-1">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="text-white">
              <span className="font-semibold">ABOUT THE GAME</span>
              <div className="my-1.5 pt-0.5 bg-gradient-to-r from-sky-400/50"/>
              <div className="flex flex-col gap-4 text-gray-400 pb-4">
                {game.about && splitParagraphs(game.about,'<br />').map((par,index) => (
                  <p key={index}>{par}</p>
                ))}
              </div>

              <span className="font-semibold uppercase">MORE {game.genre} GAMES</span>
              <div className="my-1.5 pt-0.5 bg-gradient-to-r from-sky-400/50"/>
              <div className="grid grid-cols-3 gap-1">
                {genreGames.map((genreGame, index) => (
                  <Link key={index} reloadDocument={true} to={`/game/${genreGame._id}`}>
                    <div className="bg-black/25 hover:bg-zinc-900/25 p-4 text-sm">
                      <figure className="mb-1">
                        <img className="w-full h-full" src={genreGame.portrait}/>
                      </figure>
                      <p className="text-gray-400 mb-1 truncate">{genreGame.title}</p>
                      <p className="text-xs text-sky-300 text-right">${genreGame.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/*Right Section*/}
          <div className="col-span-1 text-sm">
            <div className="bg-black/25 py-3 px-4 flex flex-col gap-1 mb-4">
              {game.categories.map((category, index) =>
                <div key={index} className="flex">
                  <div className="text-gray-300 bg-black/25 min-w-[50px]">
                    <FaUserAlt className="h-full mx-auto"/>
                  </div>
                  <div className=" cursor-pointer grow hover:bg-sky-500/50 hover:text-white bg-sky-500/25 text-sky-300 px-2 py-0.5">
                    {category}
                  </div>
                </div>
              )}
            </div>
            <div className="bg-black/25 py-3 px-4">
              <div className="text-gray-600 text-xs">
                <p>TITLE: <span className="text-sm text-gray-400">{game.title}</span></p>
                <p>GENRE: <span className="text-sm text-sky-300">{game.genre}</span></p>
                <p>DEVELOPER: <span className="text-sm text-sky-300">{game.publisher}</span></p>
                <p>PUBLISHER: <span className="text-sm text-sky-300">{game.publisher}</span></p>
                <p>FRANCHISE: <span className="text-sm text-sky-300">{game.publisher}</span></p>
                <p className="mb-3">RELEASE DATE: <span className="text-sm text-gray-400">{formatDate(game.releasedate)}</span></p>
              </div>
              <div className="flex flex-col gap-1">
                {txtLabelLinks.map((txt, index) => (
                  <div key={index} className="cursor-pointer grow hover:bg-sky-500/50 hover:text-white bg-sky-500/25 text-sky-300 px-2 py-0.5">
                    {txt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameDetailView;
