import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';

export default function SearchBar({searchTerm, setSearchTerm, searchMovies}) {
  const handleSearch = ev => {
    ev.preventDefault();
    searchMovies();
  }
  return (
    <div style={{marginTop: "30px" ,displat: "flex", justifyContent: "left", height: "fit-content" , width: "fit-content", alignItems: "center", position: "relative", borderRadius: "70px", overflow: "hidden"}}>
      <form onSubmit={handleSearch} style={{display: "flex", alignItems: "center", width: "350px", background: "white", padding: "5px"}}>
        <input name='search' type="text" onChange={ev => setSearchTerm(ev.target.value)} value={searchTerm} placeholder='Search movie titles' style={{
          marginLeft: "10px",
          border: "none",
          outline: "none",
          height: "35px",
          width: "85%",
          background: "transparent",
          borderRadius: "20px"
        }}/>  
        <div style={{position: "absolute", width: "95%", alignItems: "center", display: "flex", justifyContent: "right", height: "0"}}>
          <AiOutlineSearch className='icons' onClick={handleSearch} style={{fontSize: "25px", color: "black"}}/>
        </div>
        
      </form>
    </div>
  )
}
