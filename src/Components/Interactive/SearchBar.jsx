import React from 'react'

export default function SearchBar({searchTerm, setSearchTerm, searchMovies}) {
  const handleSearch = ev => {
    ev.preventDefault();
    searchMovies();
  }
  return (
    <div style={{displat: "flex", justifyContent: "left", height: "100px", alignItems: "center"}}>
      <form onSubmit={handleSearch} style={{height: "100%", display: "flex", alignItems: "center"}}>
        <input name='search' type="text" onChange={ev => setSearchTerm(ev.target.value)} value={searchTerm} placeholder='Search movie titles' style={{
          border: "none",
          height: "35px",
          width: "350px",
          background: "white",
          borderRadius: "20px"
        }}/>  
        <input type="button" onClick={handleSearch} value="Search"/>
      </form>
    </div>
  )
}
