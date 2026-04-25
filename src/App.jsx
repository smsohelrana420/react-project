import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Client from './components/Client';
import Question from './components/Question';
import Card from './components/Card';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Service/>
      <Client/>
      <Question/>
      <Card/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App