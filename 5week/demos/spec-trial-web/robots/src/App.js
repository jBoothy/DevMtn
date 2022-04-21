import {useState} from 'react'
import './App.css'

import Header from './components/Header'
import Form from './components/Form'
import RobotList from './components/RobotList'

const App = () => {
  const [input, setInput] = useState('')
  const [robots, setRobots] = useState([])

  const handleInput = () => {
    console.log('handleInput fn fired')
  }

  const handleRobotAdd = (e) => {
    e.preventDefault()

    let robot = {
      name: input,
      picture: `https://robohash.org/${input}.png`
    }

    setRobots([...robots, robot])
    setInput('')
  }

  return (
    <div className='app'>
      <Header/>
      <main>
        <Form />
        <RobotList />
      </main>
    </div>
  )
}

export default App