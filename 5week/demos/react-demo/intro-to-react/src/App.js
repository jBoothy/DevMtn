import logo from './logo.svg';
import './App.css';
import Child from './Child.jsx'
import React, {useState} from 'react'

function App() {
  const [input, setInput]=useState("")
  return (
    <div>
      <h1>App Component</h1>
      <h3>User Input: {input}</h3>
      <input type="text" placeholder="Type Something Cool" onChange={(e)=>setInput(e.target.value)}/>
      <Child userInput={input}/>
    </div>
  );
}

export default App;
