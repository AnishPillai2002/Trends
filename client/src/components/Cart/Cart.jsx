import React from 'react';

//importing css
import "./Cart.scss";

//importing material icons
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {



  const data=[
    {
        id:1,
        img:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        img2:"https://i5.walmartimages.com/asr/ba250a4a-5cc0-46da-b950-3c928acc0c7f.fd897010047a2c633af70a8a72f0078f.jpeg",
        title:"Graphic T-Shirt",
        desc:"Plain Solid Shirts Combo Online in India at Low Price .",
        isNew:true,
        oldPrice:200,
        price:100,
    },
    {
        id:2,
        img:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        img2:"https://i.pinimg.com/236x/bb/2b/06/bb2b0602984313ae868b4091865abf5e--mens-duffle-coat-navy-jeans.jpg",
        title:"Coat",
        desc:"Plain Solid Shirts Combo with Utmost Comfort and Style at Beyoung.",
        isNew:true,
        oldPrice:2000,
        price:1000,
    },


  ];

  return (
    <div className='cart'>
        <h1>Product's in your Cart</h1>
        {
          data?.map(item=>(
            <div className="item" key={item.id}>
              
              <img src={item.img} alt="" />
              
              <div className="detail">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className="price">
                  1 * {item.price}
                </div>
              </div>

              <DeleteIcon className="delete"/>
            </div>
          ))
        }

        <div className="total">
          <span>SUBTOTAL</span>
          <span>123</span>
        </div>

        <button>PROCEED TO CHECKOUT</button>
        
        <div className="reset">
          Reset Cart
        </div>
    </div>
  )
}

export default Cart