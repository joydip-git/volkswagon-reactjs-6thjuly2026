import { useState } from 'react'
import './App.css'
import Decrement from './Decrement'
import Increment from './Increment'

function App() {
  const [counter, setCounter] = useState(0)

  const counterHandler = (choice: number) => {
    switch (choice) {
      case 1:
        setCounter((current) => current + 1)
        break;

      case 2:
        setCounter((current) => current - 1)
        break;

      default:
        break;
    }
  }

  // const incrementElement = Increment({ counterValue: counter, increaseHandler: counterHandler })
  return (
    <div id='mainDiv'>
      { /*incrementElement*/}
      <Increment counterValue={counter} increaseHandler={counterHandler} />
      <br />
      <br />
      <Decrement counterValue={counter} decreaseHandler={counterHandler} />
    </div>
  )
}

export default App

/**
 * {
 *  counterValue: counter,
 *  decreaseHandler: counterHandler
 * }
 */
