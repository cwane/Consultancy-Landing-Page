import React from 'react'

const AboutUsCard = ({ image, title, content }) => {
  return (
    <div className='p-8 bg-white border-2 border-[#3659d8] rounded-3xl flex gap-8 max-w-lg'>
        <img src={image}/>

        <div>
            <h2 className='text-2xl font-bold text-[#0071e3]'>{title}</h2>
            <p className='font-semibold text-[#71797e]'>{content}</p>    
        </div> 
    </div>
  )
}

export default AboutUsCard