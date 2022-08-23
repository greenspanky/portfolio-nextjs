import Image from 'next/image';
import React from 'react';
 

import tenx from '../public/assets/partners/10x.png';
import axb from '../public/assets/partners/axiebootcamp.png';
import bigtime from '../public/assets/partners/bigtime.png';
import bigtimeph from '../public/assets/partners/bigtimeph.png';
import nfthorde from '../public/assets/partners/nfthorde.png';
import tierzero from '../public/assets/partners/tierzero.png';
import xplays from '../public/assets/partners/xplays.png';

const partners = () => {
  return (
    <div id='partners' className='relative w-full md:h-screen p-2 flex  py-16'>
      <div className='max-w-max m-16  flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#ffffff]'>
          Partnerships
        </p>
        <h2 className='py-4'></h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={bigtime} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>BIGTIME</h4>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tenx} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>10x Gaming Guild</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={axb} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Axie Bootcamp</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nfthorde} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NFT Horde</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tierzero} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tier Zero</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={xplays} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>X plays india</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={bigtimeph} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bigtime PH</h3>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default partners;
