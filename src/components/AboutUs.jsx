import React from 'react';

import AboutUsCard from './AboutUsCard';
import WingImage from "../assets/wingimage.svg"
// import Flyer from "../assets/flyer.svg"
// import RotatedPerson from "../assets/rotatedbigperson.svg"
// import SmallerPerson from "../assets/smallerperson.svg"

import About1 from './../assets/about1.png'
import About2 from './../assets/about2.png'

// import Image from './../assets/image.png'
// import Airplane from './../assets/mdi_airplane.png'

const AboutUs = () => {
  return (
    <container className="max-w-7xl m-auto flex flex-row relative z-10 mt-32 gap-64">
      <section className='relative z-30'>
        {/* <img src={Flyer} alt='' className='absolute'/>
        <img src={RotatedPerson} alt='' className='absolute'/>
        <img src={SmallerPerson} alt='' className='absolute bottom-0 z-30'/> */}

        <div className='section-about-image h-auto max-w-lg flex flex-row items-center'>

        <picture>
            <img src={About1} alt='about-image'></img>
          
            </picture>
            <picture>
            
            <img src={About2} alt='about-image2'></img>
        </picture>

      



        </div>
      </section>

      <section className='flex flex-col gap-8 relative z-10'>
        <h1 className='text-3xl font-bold text-[#3659d8]'>About us</h1>

        <AboutUsCard image={WingImage} title={"Connecting Futures"} content={"Right trail links students and universities for academic success."}/>
        <AboutUsCard image={WingImage} title={"Connecting Futures"} content={"Right trail links students and universities for academic success."}/>
        <AboutUsCard image={WingImage} title={"Connecting Futures"} content={"Right trail links students and universities for academic success."}/>
      </section>
    </container>
  );
}

export default AboutUs;
