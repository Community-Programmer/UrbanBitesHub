import React, { useEffect, useState } from 'react'
import burger from '../images/burger.jpg'
import pasta from '../images/macaroni-with-sausage.jpg'
import pizza from '../images/seafood-pizza.jpg'
import chicken from '../images/delicious-fried-chicken-plate.jpg'
import Slider from 'react-slick';
import '../css/Home.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {

  const images = [burger, pasta, pizza, chicken];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 3000, 
  };

  return (
    <>
    <main className='main-section'>
        <div className="text-container">
            <h1>Welcome to <span>UrbanBites Hub</span></h1>
            <p>
            Indulge your taste buds in a symphony of urban flavors curated just for you. Our food journey transcends boundaries, bringing together the vibrant essence of the cityscape onto your plate.
            </p>
            <div className="location-bar">
              <input type="text" placeholder='Enter your location...' /><i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="btn-container">
              <button className="primary-btn">Order Now</button>
              <button className="secondary-btn">Book a Table</button>

            </div>
        </div>
        <div className="image-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image">
              <img src={image} alt={`image-${index}`} />
            </div>
          ))}
          </Slider>
            
            
        </div>
    </main>
    </>
  )
}

export default Home