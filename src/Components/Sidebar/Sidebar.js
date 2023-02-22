import React, { useState } from "react";
import "./Sidebar.css"
import {GiHamburgerMenu} from "react-icons/gi";

const Sidebar = () =>{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebar = () =>{
        setSidebarOpen(!sidebarOpen)
        console.log(sidebarOpen)
    }
    return(
        <>
            <GiHamburgerMenu className="hamburger-menu" onClick={sidebar}/>
            { sidebarOpen ? 
            <div className="sidebar-container" style={{padding:'20px'}}>
                <div className="sidebar-button" style={{color: 'white',margin:'10px'}}>
                    Sign up or Log in
                </div>
                <div className="sidebar-button" style={{color: 'white',margin:'10px'}}>
                    Buy
                </div>
                <div className="sidebar-button" style={{color: 'white',margin:'10px'}}>
                    Rent
                </div>
                <div className="sidebar-button" style={{color: 'white',margin:'10px'}}>
                    Mortgage
                </div>
                <div className="sidebar-button" style={{color: 'white',margin:'10px'}}>
                    Local Info
                </div>
                <div className="sidebar-button" style={{color: 'white',margin:'10px'}}>
                    Additional Resources
                </div>
            </div>
            :
            <></>
            }
            
        </>
    )
}

export {Sidebar}