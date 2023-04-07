import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home"
import Slider from 'react-slick'
import comic from "./components/comic.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div>
      <Home />
      <div className="carousel">
        <Slider {...settings}>
          {comic.map((comic) => (
            <div className="wrap">
              <img src={comic.url} />
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App

