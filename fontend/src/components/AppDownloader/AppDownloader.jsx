import React from 'react'
import './AppDownloader.css'
import { assets } from '../../assets/assets'

function AppDownloader() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" srcset="" />
        <img src={assets.app_store} alt="" srcset="" />
      </div>
    </div>
  )
}

export default AppDownloader;
