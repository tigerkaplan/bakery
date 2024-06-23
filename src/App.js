import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
// import Menu2 from './components/Menu2';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
// import Reservation from './components/Reservation';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonial />} />
          {/* <Route path="/menu2" element={<Menu2 />} />
          <Route path="/reservation" element={<Reservation />} /> */}
        </Routes>
        <Footer />
        <div className="h-[380px] md:h-[370px]"></div>
      </div>
    </Router>
  );
};

export default App;
