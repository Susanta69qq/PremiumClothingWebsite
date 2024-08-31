
import React from 'react';
import LandingPage from './components/home/LandingPage';
import Navbar from './components/home/Navbar';
import MarqueeProducts from './components/home/MarqueeProducts';
import Featured from './components/home/Featured';
import Join from './components/Join';
import ShopAll from './components/home/ShopAll';
import Faq from './components/home/Faq';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <LandingPage />
      <MarqueeProducts />
      <Featured />
      <Join />
      <ShopAll />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
