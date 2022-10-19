import React from 'react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';


export default function SwitchPage({page, name}) {
  
    console.log(name)
  
  return (
    <div>
      {name == "Next Page" ? <BsFillArrowRightCircleFill style={{fontSize: "30px"}} onClick={page}/> 
        : <BsFillArrowLeftCircleFill style={{fontSize: "30px"}} onClick={page} /> }
    </div>)
}