import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';
import {FaRegCompass} from 'react-icons/fa';

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("load", handleResize, false);
    window.addEventListener("resize", handleResize, false);
    checkSizes()
  })
  
  function checkSizes(){
    if(windowWidth > 700){
      setShowMenu(true);
      setMobile(false)
    }
    if(windowWidth < 700){
      setMobile(true)
    }
  }
  return (
    <div>
      {mobile &&
        <div style={{display: "flex", justifyContent: "right", position: "absolute", zIndex: "1000"}}>
          <AiOutlineMenu onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} style={{fontSize: "30px"}} className="icon"></AiOutlineMenu>
        </div>
      }
      {showMenu &&
          <div className={mobile ? "navbar-mobile" : "navbar"}>
          
          
          <>
            <h1 style={{margin: "0"}}>Movies</h1>
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
          </>
          
          
        </div>
      }
      
    </div>
    
  )
}
