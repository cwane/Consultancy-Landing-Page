import React from 'react';
import HeroImage from "../assets/heroimage.svg"

const HeroSection = () => {
  return (
   <container className="max-w-7xl m-auto flex items-center -my-16 z-10 relative">
    <section className='flex flex-col gap-8 grow text-white'>

      <article className='text-4xl'>
        <h1>Find Your Dream</h1>
        <h1>University with <span className='text-6xl font-bold drop-shadow-md'>Rightrails</span></h1>
      </article>

      <article className='text-lg'>
        <input type="search" placeholder='Search for school or university' className='bg-white px-8 py-2 rounded-tl-lg rounded-bl-lg'/>
        <button className='bg-[#428dfc] px-6 py-2 rounded-tr-lg rounded-br-lg'>Search</button>
      </article>

      <article className='text-2xl'>
        <p>Right Trail assist students in selecting the optimal path by considering their interests & skills.</p>
      </article>

      <article>
        <button className='bg-white text-[#3659d8] px-6 py-3 rounded-md text-3xl'>Join us</button>
      </article>

    </section>

    <section>
      <img src={HeroImage}/>
    </section>
   </container>
  );
}

export default HeroSection;
