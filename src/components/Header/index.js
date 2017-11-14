import React, { Component } from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <svg className="Header-flickr-logo" alt="logo">
        <circle className='Header-flickr-circle-1'/>
        <circle className='Header-flickr-circle-2'/>
      </svg>
      <h1 className="Header-title">Flickr Photo Stream</h1>
    </header>
  );
}

export default Header;
