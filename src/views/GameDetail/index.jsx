import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../utils/constants';

const GameDetailView = () => {
  const { id } = useParams();
  const [game, setGame] = useState({})
  const [mainImage, setMainImage] = useState('')

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
      setMainImage(gameData.img[0])
    };

    getGame();
  }, [id]);

  return (
    <div>
      <div className='max-w-5xl mx-auto grid grid-cols-3 gap-4'>
        <section className='col-span-3 flex justify-between'>
          <p className='text-3xl text-white'>{game.title}</p>
          <button className='hover:bg-sky-500/100 bg-sky-500/25 text-sky-400 rounded px-4 py-1.5 hover:text-white'>Community Hub</button>
        </section>
        <section className='col-span-2'>
          <figure className=''>
            <img src={mainImage} className='object-cover h-[380px] w-[676px]'/>
          </figure>
          <div>
            images
          </div>
        </section>
        <section className='col-span-1'>
          <figure>
            <img src={game.portrait} className='w-full'/>
          </figure>
          game data
        </section>
        <section>buy, info</section>
        <section>stats</section>
      </div>
    </div>
  )
}

export default GameDetailView
