import React, { useState } from 'react'
//importing the css
import "./Products.scss";

import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
const Products = () => {

  //category id
  const catId=parseInt(useParams().id);

  //state hook for maximum price & sort
  const [maxPrice,setMaxPrice]=useState(5000);
  const [sort,setSort]=useState(null);
  


  return (
    <div className='products'>
        <div className="left">
          
          <div className="filterItem">

            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Hat</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">Shirts</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">Accessories</label>
            </div>
          </div>
          
          <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={5000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by Price</h2>

            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")} />
              <label htmlFor="asc">Price(Lowest First)</label>
            </div>

            <div className="inputItem">
              <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")} />
              <label htmlFor="desc">Price(Highest First)</label>
            </div>        
          </div>
        </div>

        <div className="right">
          <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <List catId={catId} maxPrice={maxPrice} sort={sort}/>

        </div>
    </div>
  )
}

export default Products