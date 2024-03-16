import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  return (
    <>
      <h1>Vite + React</h1> 
      <Todo
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Shorif Md Abdul Kadir"
        isDone={false}></Todo>
      <Todo 
        task="Try jsx" 
        isDone={true}></Todo>
      {/* <Device name ="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device></Device>
      <Person></Person>
      <Student grade ="7" score ="100"></Student>
      <Student></Student>
      <Student></Student>
      <Devloper></Devloper>   */}
    </>
  )
}

function Device (props){
  // console.log(props)
  return <h2>This device: {props.name} price: {props.price} </h2>
}

function Person(){
  const age = 25;
  return <h3>i am a person with age: {age}</h3>
}

const {grade, score} = {grade: '7', score: '99'};


function Student({grade=1, score=0}){
  console.log(grade, score)
  return (
    <div className='student'>
      <h2>Student</h2>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, cum.</p>
    </div>
  )
}


function Devloper(){
  const devloperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={devloperStyle}>
      <h3>Devloper</h3>
      <p>font End devloper</p>
    </div>
  )
}

export default App
