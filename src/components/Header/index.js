import React, { Component } from 'react'
import './header.css'

function Header () {
  return (
    <header className='header'>
      <svg className='flickr-logo' alt='logo'>
        <circle className='flickr-logo__circle-1' />
        <circle className='flickr-logo__circle-2' />
      </svg>
      <h1>Flickr Photo Stream</h1>
      <p>Photos from LEGOLAND</p>
    </header>
  )
}

export default Header
