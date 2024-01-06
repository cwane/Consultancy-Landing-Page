import React from 'react'
import Profile from "../assets/profile.svg"

const Statistics = () => {
  return (
    <div className='max-w-6xl m-auto relative z-10 flex gap-16 mt-16'>
        <Stat logo={Profile} stat={100} title={"Users"}/>
        <Stat logo={Profile} stat={100} title={"Institutions"}/>
        <Stat logo={Profile} stat={100} title={"Counselor"}/>
    </div>
  )
}

export default Statistics

const Stat = ({ logo, stat, title }) => {
    return (
        <div className='rounded-xl border-2 border-[#98aaec] bg-white w-48 flex flex-col gap-2 items-center px-4 py-4'>
            <img src={logo} className='w-[64px] p-2 bg-[#eaf2fc] rounded-full'/>
            <p className='text-[#3659d8] font-semibold text-3xl'>{stat}+</p>
            <p className='font-semibold text-3xl'>{title}</p>
        </div>
    )
}