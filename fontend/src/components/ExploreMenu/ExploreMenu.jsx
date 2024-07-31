import React, { Component } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setcategory })=>{

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem Ipsum is a type of placeholder text commonly used in the printing and web or graphic design industries. It's a pseudo-Latin text that has no meaningful content, which makes it ideal for filling in the space where th...</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setcategory(prev=>prev===item.menu_name ? "" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name ? "active" : null} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}


export default ExploreMenu;