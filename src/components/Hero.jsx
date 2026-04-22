import React from 'react'
import Heroimg from '../assets/hero-img.png'
const Hero = () => {
  return (
    <header>
      <div className="container border border-indigo-700 border-t-0">
        <div className="sm:flex items-center h-[70vh] sm:h-[90vh] justify-around">
          <div className="text-white text-center ">
            <h1 className="text-2xl mt-4 sm:mt-0 sm:text-5xl font-bold font-poppins">
              Smart Coders: Learn <br /> Programming
            </h1>
            <button className="mt-4 sm:mt-16 bg-indigo-900 sm:px-7 sm:py-5 px-4 py-2 rounded-full text-xl hover:bg-indigo-950 transition shadow-xl">
              Join :Programming Shikbo's Team{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 inline-block text-red-500 ml-2 animate-ping"
              > 
            
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div>
            <img className="animate-pulse" src={Heroimg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero