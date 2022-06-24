//import React from 'react';
import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import { Link } from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'

function Navbar() {
    const [sidebar,setSidebar] = useState(false)
     const handleSidebar = () =>{
        setSidebar(!sidebar)
     }

  return (
    <>
    <IconContext.Provider value={{color:"grey"}}>
    <div className="navbar">
        <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={handleSidebar}/>
            </Link> 
    </div>
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'} >
<ul className="nav-menu-options" onClick={handleSidebar}>
    <li className="nav-toggle">
        <Link to="#" className="menu-bars">
      <AiIcons.AiOutlineClose/>
        </Link>
    </li>
<li>
   {SidebarData.map((option, index) =>{
    return(
        <li key={index} className={option.clName} >
            <Link to={option.path}>
                {option.icon}
                <span> {option.title} </span>
            </Link>
        </li>
    )
   })} 
</li>
</ul>

    </nav>
    </IconContext.Provider>
    </>
  ) 
}

export default Navbar