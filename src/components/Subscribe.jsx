import React from 'react';

const Subscribe = () => {
  return (
    <container className="max-w-full px-8 m-auto -mt-64 flex justify-between items-center mb-8">
      <section>
        <h1 className='text-5xl font-bold text-[#0064e1]'>Subscribe to get Updates</h1>
        <p className='text-xl font-semibold text-[#80878c]'>Stay in the know!</p>
      </section>

      <section className='text-2xl flex flex-row'>
        <input type="search" placeholder='Email..' className='border-2 border-[#0064e1] bg-white px-8 py-2 rounded-tl-lg rounded-bl-lg text-2xl'/>
        <button className='border-2 border-[#0064e1] text-[#0064e1] px-24 py-2 rounded-tr-lg rounded-br-lg font-bold'>Subscribe</button>
      </section>
    </container>
  //   <wrapper>
  //   <div className='bg-white py-4 text-blue  flex flex-row items-center '>
  //       <div className='section-subscribe-data'>
        

  //       <h1 className='heading1'>Subscribe to get updates</h1>
  //       <h6 className='heading2'>stay in the know!</h6>

  //       </div>
  //       <div className='section-subscribe-search h-auto max-w-lg'>
  //       <div class="m-3 py-5  rounded inline-block shadow-lg ">
    
  //       <div class="flex justify-between mb-3">
  //           <input class="mr-3 shadow-inner text-blue rounded px-3 text-sm border-b border-blue-700" placeholder="Enter your email" type="text" />
  //           <button class="border-t border-teal-300 shadow-2xl bg-blue-600 text-white font-bold text-sm rounded px-3 py-2">Subscribe</button>
  //       </div>
    
  //   </div>

  //       </div>
  //   </div>
  //  </wrapper>
  );
}

export default Subscribe;
