import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/games/bigtime.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Bigtime Studio</h2>
          <h3>MMORPG play and earn</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Game</p>
          <h2>Overview</h2>
          <p>
          Big Time is an upcoming free-to-play* and play-to-earn* multiplayer action-adventure RPG for PC, integrating blockchain (ETH) and NFT technology protocols that enable players to own and trade what they earn or buy in game for cryptocurrency (ETH-convertible). For now, Big Time is in its early development phase (only alpha footage published), which also involves raising funds through founders directed NFT sales, with one occurring in July 2021 and another, the “SPACE NFT Sale”, starting December 21st at 5pm EST (official announcement). While the game is expected to be free-to-play at launch, early access will most likely entirely be restricted to founders who purchased Founders’ NFTs. We have included below video introductions by youtubers CAGYJAN and The Blockchain Gamer, who specialize in blockchain games.
* Big Time was once marketed as free to play, and play to earn (NFT loot drops during gameplay), but no in-depth info can be found at this early stage.
          </p>
          <a
            href='https://bigtime.gg'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Visit</button>
          </a>
           
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl rounded-xl py-4'>
          
           
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
