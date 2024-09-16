import React from 'react'
import Navbar from './componants/navbar/Navbar'
import Sidebar from './componants/sideBar/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App