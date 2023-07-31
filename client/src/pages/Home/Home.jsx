import React from 'react'

//importing css for home
import "./Home.scss";

//importing slider component to the homepage
import Slider from "../../components/Slider/Slider.jsx";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type={"Featured"}/>
      <Categories/>
      <FeaturedProducts type={"Trending"}/>
      <Contact/>
    </div>
  )
}

export default Home