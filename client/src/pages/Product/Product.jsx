import React, { useState } from 'react'

//importing css
import "./Product.scss";

//importing icons
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BalanceSharpIcon from '@mui/icons-material/BalanceSharp';


const Product = () => {

    //state hook for image selection and quantity
    const [selectedImage,setSelectedImage]=useState(0);

    const[quantity,setQuantity]=useState(0);
 
    const images=[
      "https://m.media-amazon.com/images/I/71GW3tzx-8L._UX569_.jpg",
      "https://m.media-amazon.com/images/I/81H9pR4FbcL._UX569_.jpg",
      "https://m.media-amazon.com/images/I/61QDZ4vYPcL._UX569_.jpg"

    ];

  return (
    <div className='product'>
      
      <div className="left">

        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=>setSelectedImage(0)}/>
          <img src={images[1]} alt="" onClick={(e)=>setSelectedImage(1)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>

      </div>
      
      <div className="right">
        <h2>Coat</h2>
        <span className="price">Rs 1000</span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>(prev === 0 ? 0 : prev-1))}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>setQuantity(prev=>prev+1)} >+</button>
        </div>

        <div className="add">
          <AddShoppingCartRoundedIcon/> ADD TO CART
        </div>
        
        <div className="link">
          <div className="item">
            <FavoriteBorderRoundedIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceSharpIcon/> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
        </div>
         

      </div>
    
    </div>
  )
}

export default Product