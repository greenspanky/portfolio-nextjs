import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import videoBG from '../public/assets/dust.mp4'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Main = () => {
  return (
    

    <div id='home' className='relative w-full h-screen text-center'>
            
          <div className='relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          
        <div>
          <p className=' uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white'>
           BIGTIME WARRIORS
          </h1>
          <h1 className='py-2 text-white'>GAMING GUILD</h1>
          <p className='py-4 text-white sm:max-w-[70%] m-auto'>
            We are excited to start our web3 gaming guild with a team of competent people willing to
             take our community the best it can be! Join us in making history and get rewarded
     
          </p>
          <div className='relative flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.discord.gg/bigtimewarriors'
              target='_blank'
              rel='noreferrer'
            >
              <div className='relative rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaDiscord />
              </div>
            </a>
            <a
              href='https://twitter.com/BigtimeWarriors'
              target='_blank'
              rel='noreferrer'
            >
              <div className='relative rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTwitter />
              </div>
            </a>
            <Link href='https://www.facebook.com/bigtimewarriors'>
              <div className='relative rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='relative rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          
               </div>
              
      </div>
      <video className="absolute top-0 left-0 right-0 -z-10 overflow-hidden" src={videoBG} autoPlay loop muted></video>
      
    </div>
  );
};

export default Main;
