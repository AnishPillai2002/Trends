import React, { useEffect, useState } from 'react'

//importing axios for fetching data from strapi 
import axios from "axios";

//importing Cards
import Card from "../Card/Card.jsx";

//importing Css
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {
  const data=[
    {
        id:1,
        img:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        img2:"https://i5.walmartimages.com/asr/ba250a4a-5cc0-46da-b950-3c928acc0c7f.fd897010047a2c633af70a8a72f0078f.jpeg",
        title:"Graphic T-Shirt",
        isNew:true,
        oldPrice:200,
        price:100,
    },
    {
        id:2,
        img:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        img2:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        title:"Coat",
        isNew:true,
        oldPrice:2000,
        price:1000,
    },
    {
        id:3,
        img:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        img2:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        title:"Skirt",
        oldPrice:600,
        price:450,
    },
    {
        id:4,
        img:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        img2:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        title:"Hat",
        oldPrice:300,
        price:250,
    },
  ];

  //initially the Featured product is empty
  const[product,setProduct]=useState([]);

  //useEffect to fetch data
  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const data = await axios.get(import.meta.env.VITE_API_URL+"/products",
                {
                    headers:{Authorization:"bearer"+import.meta.env.env.VITE_API_TOKEN}
                });

            console.log(data);
        }catch(err){
            console.log(err);
        }
    };

    fetchData();
  },[])

  return (
    <div className='featured'>
        <div className="top">

            <h1>{type} Products</h1>

            <p>
            Discover the trendsetters of style in our Featured Products collection.
            Elevate your wardrobe with the latest fashion must-haves curated just for you. 
            From chic dresses to statement accessories, embrace the essence of elegance and 
            stay ahead of the fashion curve. Shop now and be the icon of every occasion!

            </p>

        </div>

        <div className="bottom">

            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}


        </div>
    </div>
  )
}

export default FeaturedProducts