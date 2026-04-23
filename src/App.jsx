import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Client from './components/Client';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Service/>
      <Client/>
    </div>
  );
}

export default App