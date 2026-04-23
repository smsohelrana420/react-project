import React from 'react'

const Question = () => {
  return (
    <section className="container mb-5">
      <div className=" bg-[#1F2937] py-10">
        <h2 className="text-center mb-10 text-xl sm:text-3xl text-white">
          Ask a question
        </h2>

        <form>
          <input
            type="email"
            className="block mx-auto bg-white w-5/6 sm:w-1/2 h-12 px-4 placeholder:italic mb-10 placeholder:text-xl placeholder:text-orange-800 border-2 border-orange-900 rounded "
            placeholder="Your Email"
          />

          <textarea
            className="bg-white block border-2 border-orange-800 placeholder:text-orange-800 placeholder:italic px-5 py-5 h-52 placeholder:text-xl rounded mx-auto w-5/6 sm:w-1/2"
            placeholder="Your Question"
          ></textarea>

          <button className="block mx-auto bg-green-900 text-white text-xl px-10 py-4 my-12 hover:bg-green-950 transition cursor-pointer">
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Question