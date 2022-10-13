import {Link} from 'react-router-dom';
import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegCompass} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div style={{
        float: "left",
        width: "120px",
        background: "#171717",
        position: "absolute",
        minHeight: "100%",
        color: "white"
    }}>
        <h1>Movies</h1>
        <div style={{height: "100%", display: "flex", alignItems:"center"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
                
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap:"5px"}}>
                  <AiOutlineHome />
                  <Link to='/'>Home</Link>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap:"5px"}}>
                  <FaRegCompass />
                  <Link to='/discover'>Discover</Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}
