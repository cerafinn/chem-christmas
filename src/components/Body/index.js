import React from 'react';

import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Gallery from '../Gallery';
import Profiles from '../Profiles';
import Contact from '../../Pages/Contact';

function Body({ currentSection }) {
  const currentBody = () => {
    switch (currentSection.name) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'gallery':
        return <Gallery />
      case 'profiles':
        return <Profiles />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div>
      {/* how react generates the main section of the page based on what is clicked in the nav, switch case */}
      {currentBody()}
    </div>
  )
};

export default Body;