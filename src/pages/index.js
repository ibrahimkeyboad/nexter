import Feature from '@/components/feature';
import Footer from '@/components/footer';
import Gallery from '@/components/gallary';
import Header from '@/components/header';
import Home from '@/components/home';
import Realtors from '@/components/realtors';
import SideBar from '@/components/side-bar';
import StoryTell from '@/components/story';
import React from 'react';

function HomePage() {
  return (
    <div className='container'>
      <SideBar />
      <Header />
      <Realtors />
      <Feature />
      <StoryTell />
      <Home />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
