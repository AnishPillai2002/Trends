import React from 'react'
import { useState } from 'react';

//importing icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

//importing css for slider
import "./Slider.scss";






const Slider = () => {

  //usestate hook
  const [currentSlide, setCurrentSlide]=useState(0);

  //data for the slider images
  const data=[
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",

  ];

  //function to move to previous slide
  const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=>prev-1);
  }

  //function to move to next slide
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=>prev+1);
  }
  
 
  return (
    <div className='slider'>

        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ChevronLeftIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ChevronRightIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider