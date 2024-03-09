import React from 'react'
import logo from '../logo.svg';

export default function Splash() {
  return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='App-button'>
            Enter Gallery →
        </button>
        </header>
    </div>
  )
}
