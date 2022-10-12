import React, { useState } from 'react'
import FilterButton from './FilterButton';

export default function FilterCollection() {
    const [filters, setFilters] = useState([]);
    return (
    <div style={{display: "flex", justifyContent: "left", gap: "20px", marginLeft: "40px", marginBottom: "100px"}}>
        <FilterButton name={"Action"}/>
        <FilterButton name={"Science fiction"}/>
        <FilterButton name={"Adventure"}/>
        <FilterButton name={"Fantasy"}/>
        <FilterButton name={"War"}/>
        <FilterButton name={"Animation"}/>
        <FilterButton name={"Drama"}/>
        <FilterButton name={"Horor"}/>
    </div>
  )
}
