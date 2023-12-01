import React, { useEffect } from 'react'
import burger from '../images/burger.jpg'
import pasta from '../images/macaroni-with-sausage.jpg'
import pizza from '../images/seafood-pizza.jpg'
import chicken from '../images/delicious-fried-chicken-plate.jpg'
import '../css/Home.css'

const Home = () => {

  useEffect(()=>{
    let index = 0;
    displayImages();
    function displayImages() {
      let i;
      const images = document.getElementsByClassName("image");
      for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      index++;
      if (index > images.length) {
        index = 1;
      }
      images[index-1].style.display = "block";
      setTimeout(displayImages, 3000); 
    }
  },[])
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
          <div className="image fade">
            <img src={burger} alt="burger" />
          </div>
          <div className="image fade">
            <img src={pasta} alt="pasta" />
          </div>
          <div className="image fade">
            <img src={pizza} alt="pizza" />
          </div>
          <div className="image fade">
            <img src={chicken} alt="chicken" />
          </div>
            
            
        </div>
    </main>
    </>
  )
}

export default Home