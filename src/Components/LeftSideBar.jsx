import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegCompass} from 'react-icons/fa'

export default function LeftSideBar() {
  return (
    <div style={{
        float: "left",
        width: "300px",
        background: "#171717",
        position: "absolute",
        height: "100%",
        color: "white"
    }}>
        <h1>Movies</h1>
        <div style={{height: "100%", display: "flex", alignItems:"center"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
                
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap:"5px"}}>
                  <AiOutlineHome />
                  <a href='#'>Home</a>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap:"5px"}}>
                  <FaRegCompass />
                  <a href='#'>Discover</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}
