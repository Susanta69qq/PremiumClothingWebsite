
import React from 'react';
import LandingPage from './components/home/LandingPage';
import Navbar from './components/home/Navbar';
import MarqueeProducts from './components/home/MarqueeProducts';
import Featured from './components/home/Featured';

function App() {
  return (
    <div className='w-full min-h-screen bg-[#E0E0E0]'>
      <Navbar />
      <LandingPage />
      <MarqueeProducts />
      <Featured />
    </div>
  );
}

export default App;
