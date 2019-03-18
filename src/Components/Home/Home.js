import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2 className="home-intro">Hi, it's Sean</h2>
        <h1 className="home-tagline">I'm a fullstack software engineer</h1>
        <p className="sub-headline">Checkout my work <Link to="/projects"><i className="fas fa-arrow-circle-right arrow fa-lg"></i></Link></p>
      </div>
    </div>
  )
}

export default Home;