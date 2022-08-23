import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Team1 from '../public/assets/team/team_img01.png';
import Team2 from '../public/assets/team/team_img02.png';
import Team3 from '../public/assets/team/team_img03.png';
import Member1 from '../public/assets/team/team_member01.jpg';
import Member2 from '../public/assets/team/team_member02.jpg';
import Member3 from '../public/assets/team/team_member03.png';
import videoBG from '../public/assets/helm.mp4';


const About = () => {
  return (
    

    <div id='about' className='relative w-full max-h-full p-2 flex  py-16 '>
      
          <div className='max-w-max m-16 md:grid-cols-1 sm:grid-cols-1 gap-8'>

        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About Us
          </p>
          <h2 className='py-4'>Who we are</h2>
          <p className='py-2 text-gray-600'>
            History
          </p>
          <p className='py-2 text-white'>
          It all started with an epic love for gaming! sonic, Legend of zelda- ocarina of time. With many years of love for the gaming industry, DSTRUKT decide to start his own guild along side his father Dean. He decided with much thought, the BIGTIME WARRIORS was founded after searching for the correct team that would bring a happy balance of like minded love for the gaming industry along with a vision of a friendly and happy guild.

                    </p>
          <p className='py-2 text-white'>
          Gewii, GREENMANGO AND BEAST TAMER where brought on board to help create DSTRUKTs vision of a family like guild for all ages and genders to enjoy
          </p>
        </div>


        <div className='relative   col-span-3'>
        <video className="absolute -z-10 overflow-hidden" src={videoBG} autoPlay loop muted></video>
        <h2 className='py-4'>Team</h2>
        <p className='py-2 text-gray-600'>
            Core Members
          </p>
          
          

          <div className='relative grid md:grid-cols-1 lg:grid-cols-2 gap-8 ' >
          
          <div className='box md:flex bg-slate-100 p-8 md:p-1 dark:bg-black gap-0 max-w-2xl'>  
          <Image src={Team1} width='120px' height='120px' alt='/' className='absolute rounded-xl md:h-auto mx-auto md:w-32 '/>
              <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p className='text-lg font-medium'>
                  “Dstrukt is the owner of our gaming guild.”
                </p>
              </blockquote>
              <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                  Chris
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                  Guild Owner
                </div>
              </figcaption>
            
            </div>
          </div>

          <div className='box md:flex bg-slate-100 p-8 md:p-1 dark:bg-black gap-0 max-w-2xl '>  
          <Image src={Team2} width='120px' height='120px' alt='/' className='rounded-xl'/>
              <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p className='text-lg font-medium'>
                  “Dstrukt is the owner of our gaming guild.”
                </p>
              </blockquote>
              <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                  GREENMANGO
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                  Admin
                </div>
              </figcaption>
            
            </div>
          </div>
          <div className='box md:flex bg-slate-100 p-8 md:p-1 dark:bg-black gap-0 max-w-2xl '>  
          <Image src={Team3} width='120px' height='120px' alt='/' className='rounded-xl'/>
              <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p className='text-lg font-medium'>
                  “Dstrukt is the owner of our gaming guild.”
                </p>
              </blockquote>
              <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                  BEASTTAMER
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                  Admin
                </div>
              </figcaption>
            
            </div>
          </div>
          <div className='box md:flex bg-slate-100 p-8 md:p-1 dark:bg-black gap-0 max-w-2xl '>  
          <Image src={Member1} width='120px' height='120px' alt='/' className='rounded-xl'/>
              <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p className='text-lg font-medium'>
                  “Dstrukt is the owner of our gaming guild.”
                </p>
              </blockquote>
              <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                  Icode
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                  Content Support
                </div>
              </figcaption>
            
            </div>
          </div>
          <div className='box md:flex bg-slate-100 p-8 md:p-1 dark:bg-black gap-0 max-w-2xl '>  
          <Image src={Member2} width='120px' height='120px' alt='/' className='rounded-xl'/>
              <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p className='text-lg font-medium'>
                  “Dstrukt is the owner of our gaming guild.”
                </p>
              </blockquote>
              <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                  Andrea
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                  Content Creator
                </div>
              </figcaption>
            
            </div>
          </div> 
          <div className='box md:flex bg-slate-100 p-8 md:p-1 dark:bg-black gap-0 max-w-2xl '>  
          <Image src={Member3} width='120px' height='120px' alt='/' className='rounded-xl'/>
              <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
              <blockquote>
                <p className='text-lg font-medium'>
                  “Dstrukt is the owner of our gaming guild.”
                </p>
              </blockquote>
              <figcaption className='font-medium'>
                <div className='text-sky-500 dark:text-sky-400'>
                  TQ
                </div>
                <div className='text-slate-700 dark:text-slate-500'>
                  Content Creator
                </div>
              </figcaption>
            
            </div>
          </div>
          
          
        

          </div>

        </div>
       



      </div>
    </div>
  );
};

export default About;
