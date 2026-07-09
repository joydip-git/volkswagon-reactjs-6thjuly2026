import { useState } from "react";


function App() {
  console.log('rendered');

  const [counter, setCounter] = useState<number>(0)

  //const stateInfo = useState(0)
  // const counter = stateInfo[0]
  // const updateCounter = stateInfo[1]

  const counterhandler = function () {
    console.log(counter);
    const newState = counter + 1
    setCounter(newState)
    // setCounter(
    //   function (currentState) {
    //     return currentState + 1
    //   }
    // )
    console.log(counter);
  }
  return (
    <div>
      welcome to react state
      <br />
      Counter: &nbsp; {counter}
      <br />
      <button type="button" onClick={counterhandler}>
        Increase
      </button>
    </div>
  )
}

export default App