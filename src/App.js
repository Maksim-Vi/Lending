import React from 'react';
import './App.css';

import './css/footer.css'
import Header from './components/header/header';
import Section from './components/section/section';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Footer from './components/footer/footer';

function App() {
  return ( 
  <div>
    <Header />
    <Section />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />

  </div>);
}

export default App;
