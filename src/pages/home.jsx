import React from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/home.css';

const Home = () => {
  const navigate =useNavigate();
  
  const handleContact = () => {
    navigate('/contact');
  }
  return (
    <div className='home-container'>
      {/*header  */}
      <header className='header'>
        {/* logo */}
        <img src="/images/gz.png" alt="Genz Connect" />
        {/* Nav */}
        <nav className='navbar'>
          <ul>
            <li onClick={()=>navigate('/')} > Home</li>
            <li> About</li>
            <li> Connect</li>
            <li> Login</li>
            <li> Register</li>
          </ul>
        </nav>
      </header>
      
      {/*Hero  */}
      <div className='hero-section'
        style={{ backgroundImage: "url('/images/city_night.jpg')" }} >
      <button onClick={handleContact}>Get Started</button>
      </div>
      {/*Sections  */}
      {/*Event  */}
      {/* Tea Room */}
      {/*Trend Songs  */}
      {/*Trend mivies and series  */}
      {/*Trend books  */}
      {/*Trend places  */}
      {/*Trend people  */}
      {/*Get In touch  */}
      {/* Footer */}
      
    </div>
  );
};

export default Home;
