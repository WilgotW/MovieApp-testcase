import React from 'react'

export default function SwitchPage({page, name}) {
  return (<div><button onClick={page}>{name}</button></div>)
}