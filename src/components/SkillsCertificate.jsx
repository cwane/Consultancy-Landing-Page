import React from 'react';
import StudentImage from "../assets/studentsimage.svg"
import BlueRectangle from "../assets/rectangleblue.png"
import CurvedRectangle from "../assets/curvedreactangle.png"

const SkillsCertificate = () => {
  return (
    <div className='relative'>
      <container className="max-w-7xl m-auto -mt-64 flex items-center relative z-10">
        <section className='text-5xl flex flex-col gap-4 text-white'>
          <span className='italic text-align-center'>Get your quality</span>
          <h1 className='font-bold'>Skills certificate from</h1>
          <h1 className='text-6xl font-bold drop-shadow-md'>Right Trails</h1>
          <article>
            <button className='bg-white text-[#3255d9] px-16 py-4 rounded-full text-base font-bold'>Get Started Now</button>
          </article>
        </section>

        <section className=''>
          <img src={StudentImage} alt='' />
        </section>

      </container>
      <img src={BlueRectangle} className='absolute bottom-[315px] h-[500px] w-full z-0'/>
      <img src={CurvedRectangle} className='absolute bottom-[315px] h-[500px] w-full z-0'/>
    </div>
  );
}

export default SkillsCertificate;
