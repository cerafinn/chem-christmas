import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [sections] = useState([
    { name: "home"},
    { name: "about" },
    { name: "profiles" },
    { name: "gallery" },
    { name: "contact" }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header />
      <Nav
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
    ></Nav>

      <main>
        <Body currentSection={currentSection}></Body>
      </main>

      <Footer />

    </div>
  );
}

export default App;