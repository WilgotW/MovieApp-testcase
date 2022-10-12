import React, { useState } from 'react'

export default function SearchBar({searchTerm, setSearchTerm, searchMovies}) {
  const handleSearch = ev => {
    ev.preventDefault();
    searchMovies();
  }

  return (
    <div style={{displat: "flex", justifyContent: "left", height: "100px", alignItems: "center", marginLeft: "25px"}}>
      <form onSubmit={handleSearch} style={{height: "100%", display: "flex", alignItems: "center", padding: "10px"}}>
        <input name='search' type="text" onChange={ev => setSearchTerm(ev.target.value)} value={searchTerm} placeholder='Search movie titles' style={{
          border: "none",
          height: "30px",
          width: "300px",
          background: "white",
          borderRadius: "20px"
        }}/>  
        <input type="button" onClick={handleSearch} value="Search"/>
      </form>
    </div>
  )
}
