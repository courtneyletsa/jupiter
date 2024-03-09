import React from "react";
import hero_image from '../assets/images/hero_image.svg'

export default function Home() {
  return (
    <div className="App">
      <nav>
        {/* <img src='../assets/images/small_logo.svg' className='logo'/>  */}
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Technology</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <button>Join Jupiter</button>
        </ul>
      </nav>
      <div className="first-section">
        <h2>
          Showcase Your Artistry on Jupiter: Where Artists Flourish and Connect
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <button>BUILD YOUR EXHIBIT</button>
      </div>

      <div className="hero">
        <img src={hero_image} />
      </div>
    </div>
  );
}
