import './App.css'
import { useState } from 'react'
import NameList from './NameList'

const namelist = ['anil', 'sunil', 'joydip']

function App() {

  const [names, setNames] = useState(namelist)
  const [show, setShow] = useState(false)

  const sortHandler = () => {
    const copy = [...names]
    copy.sort(
      (name1, name2) => {
        return name1.localeCompare(name2)
      }
    )
    setNames(copy)
    // setNames(
    //   (copy) => {
    //     return copy.sort(
    //       (name1, name2) => {
    //         return name1.localeCompare(name2)
    //       }
    //     )
    //   }
    // )
  }


  return <div>
    <button onClick={
      () => setShow(current => !current)
    }>
      {show ? 'Hide' : 'Show'}
    </button>
    <br />
    {
      show && <NameList listofnames={names} sortNames={sortHandler} />
    }
  </div>
}

export default App
