import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}
function Person(){
  const age = 25;
  return <h3>i am a person with age: {age}</h3>
}

function Student(){
  return (
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, cum.</p>
    </div>
  )
}

export default App
