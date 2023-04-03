import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
   
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt=""
      />
    
      <form onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for movies, shows, and more"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt=""
      />
    </div>
  );
}

export default Navbar;