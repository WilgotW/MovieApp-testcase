import React, { useState } from 'react'
import generateImage from './generateImage';

export default function PersonProfile({person}) {
    if(person.poster_path !== null){
        var profile = generateImage("https://image.tmdb.org/t/p/", "w185/", person.profile_path);
    }  
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
            {person.profile_path !== undefined &&
                <img className='cast-profile' src={profile} alt="" />
            }
        </div>  
    </div>
  )
}
