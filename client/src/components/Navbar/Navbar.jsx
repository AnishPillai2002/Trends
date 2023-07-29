import React from 'react'

// importing icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//importing react-router-dom
import { Link } from 'react-router-dom';

//importing css for Navbar
import "./Navbar.scss";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">

          <div className="item">
            <img src="/img/en.png" alt=""/>
            <ExpandMoreIcon/>
          </div>

          <div className="item">
            <span>USD</span>
            <ExpandMoreIcon/>
          </div>

          <div className="item">
            <Link className='link' to="/products/1">Men</Link>
          </div>

          <div className="item">
            <Link className='link' to="/products/2">Women</Link>
          </div>

          <div className="item">
            <Link className='link' to="/products/3">Accessories</Link>
          </div>

          <div className="item">
            <Link className='link' to="/products/4">Kids</Link>
          </div>
        </div>

  
        <div className="center">
          <Link className='link' to="/">Trends</Link>
        </div>


        <div className="right">      
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>

          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>
          
          <div className="icons">
            <SearchOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Navbar