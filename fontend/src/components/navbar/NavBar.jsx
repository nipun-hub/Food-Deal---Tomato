import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const navBar = ({setShowLogin}) => {
  const [menu, setmenu] = useState("home");

  const {getTotlCartAmmount} = useContext(StoreContext)

  return (
    <div className='navBar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="naubar-menu">
        <Link to='/' onClick={()=> { setmenu("home") }} className={menu == "home" ? "active" : null} >Home</Link>
        <a href='#explore-menu' onClick={()=> { setmenu("menu") }} className={menu == "menu" ? "active" : null} >Menu</a>
        <a href='#app-download' onClick={()=> { setmenu("mobile-app") }} className={menu == "mobile-app" ? "active" : null} >Mobile-app</a>
        <a href='#footer' onClick={()=> { setmenu("contact us") }} className={menu == "contact us" ? "active" : null} >Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" srcset="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" srcset="" /></Link>
          <div className={getTotlCartAmmount()===0?null:"dot"}></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>sign in</button>
      </div>
    </div>
  )
}

export default navBar
