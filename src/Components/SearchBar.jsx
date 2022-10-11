import React, { useState } from 'react'

export default function SearchBar({searchTerm, setSearchTerm}) {
    
  return (
    <div>
        <input type="text" onChange={ev => setSearchTerm(ev.target.value)} value={searchTerm}/>
        
    </div>
  )
}
