import React from 'react';
import CollegeEmblem from "../assets/collegeemblem.svg"

const TopUniversity = () => {
  return (
    <container className="max-w-7xl m-auto flex flex-col gap-8 mt-16">
      <section className='self-center'>
        <h1 className='text-4xl font-bold text-[#3659d8]'>Some of our Top Universities</h1>
      </section>
      
      <section className='flex flex-row justify-between'>
        <UniversityContainer image={CollegeEmblem} name={"Lake Tahoe College"} location={"California, United States"} duration={"1 - 8 month"} fees={"$3,755 USD / Year"} language={"English as Second Language"}/>
        <UniversityContainer image={CollegeEmblem} name={"Lake Tahoe College"} location={"California, United States"} duration={"1 - 8 month"} fees={"$3,755 USD / Year"} language={"English as Second Language"}/>
        <UniversityContainer image={CollegeEmblem} name={"Lake Tahoe College"} location={"California, United States"} duration={"1 - 8 month"} fees={"$3,755 USD / Year"} language={"English as Second Language"}/>
      </section>
    </container>
)}

export default TopUniversity;

const UniversityContainer = ({ image, name, location, duration, fees, language}) => {

  return (
    <section className='bg-[#428dfc] text-white flex flex-col gap-4 rounded-xl overflow-hidden'>
      <img src={image} className=''/>

      <article className='flex flex-col px-8 py-4 space-y-2 text-lg'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p>{location}</p>
        <p>{duration}</p>
        <p>{fees}</p>
        <p>{language}</p>
        <article className='self-center'>
          <button className='bg-white text-[#428dfc] px-4 py-2 rounded-md font-bold'>Learn more</button>
        </article>
      </article>
    </section>
  )
}
