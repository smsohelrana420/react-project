import React from 'react'

const Subscribe = () => {
  return (
    <section className='my-10 sm:my-16 md:my-20 lg:my-32'>
      <div className="container  bg-lime-950">
        <div className='bg-[url("src/assets/subscribe-bg.png")] bg-no-repeat bg-left py-10 sm:py-16 md:py-20  sm:flex justify-center items-center text-white gap-10 sm:gap-16 md:gap-20 lg:gap-32'>
          <div className='text-center mb-10 sm:mb-0 sm:border-r-2 sm:pr-28'>
            <h2 className='text-xl'>Newsletter Subscription</h2>
            <p>
              Get Subscribed to our newsletter & receive latest lorem
              updates{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <input
              className="bg-white placeholder:text-yellow-500 h-10 px-2 rounded-sm border-none"
              type="email"
              placeholder="E-mail"
            />
            <button className="bg-red-900 px-5 py-2 hover:bg-red-600 cursor-pointer transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe