import React from 'react'

export default function ShowMoreButton({page, name}) {
  return (
    <div>
        <button onClick={page}>{name}</button>
    </div>
  )
}
