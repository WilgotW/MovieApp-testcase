import React, { useState } from 'react'
import generateImage from './generateImage';

export default function PersonProfile({person}) {
    const profile = generateImage("https://image.tmdb.org/t/p/", "w185", person.profile_path);
    const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}  style={{
            width: "fit-content",
            position: "relative",
            textAlign: "center",
            color: "white"
        }}>
            {isHovering && 
                <div style={{
                    zIndex: "10",
                    pointerEvents: "none",
                    fontWeight: "600",
                    width: "100%",
                    userSelect: "none",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>{person.name} <br /> played as: {person.character} </div>
            }
            <img className='cast-profile' src={profile} alt="" />
        </div>  
        {/* <div style={{
            position: 'relative',
            minHeight: "100vh",
            background: "gray"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center",
                padding: "10px"
            }}>

            </div>
        </div> */}
        
    </div>
  )
}
