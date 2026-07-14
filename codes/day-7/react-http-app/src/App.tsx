import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [show, setShow] = useState(false)
  const showHandler = () => {
    setShow(
      (current) => {
        return !current
      }
    )
  }
  return (
    <div>
      <button type="button" onClick={showHandler}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <TodoList />}
    </div>
  )
}

export default App
