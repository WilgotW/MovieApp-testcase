import React from 'react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
export default function SwitchPage({page, name}) {
  return (
  <div>
    {name == "Next Page" ? <BsFillArrowRightCircleFill className='icons' style={{fontSize: "30px"}} onClick={page}/> 
      : <BsFillArrowLeftCircleFill className='icons' style={{fontSize: "30px"}} onClick={page} /> }
  </div>)
}