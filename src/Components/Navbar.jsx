import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegCompass} from 'react-icons/fa'

export default function Navbar() {
  const [height, setHeight] = useState("100vh");
  
  useEffect(() => {
    window.onscroll = () =>{
      console.log("heeee")
      setHeight("100%")
    }
  }, []);
  
  return (
    <div style={{
        width: "220px",
        background: "#171717",
        height: {height},
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
