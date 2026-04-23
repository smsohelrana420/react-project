import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Client from './components/Client';
import Question from './components/Question';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Service/>
      <Client/>
      <Question/>
    </div>
  );
}

export default App