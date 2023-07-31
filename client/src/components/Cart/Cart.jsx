import React from 'react';

//importing css
import "./Cart.scss";

const Cart = () => {



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


  ];

  return (
    <div className='cart'>
        <h1>Product</h1>

    </div>
  )
}

export default Cart