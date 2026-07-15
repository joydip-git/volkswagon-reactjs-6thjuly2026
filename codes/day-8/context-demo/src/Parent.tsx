import { useState } from "react"
import ImmediateChild from "./ImmediateChild"
import CounterContext from "./CounterContext"

const Parent = () => {
    const [count, setCount] = useState(10)
    const increaseCounter = () => {
        setCount((current) => current + 1)
    }
    return (
        <CounterContext.Provider value={
            { counterValue: count, counterHandler: increaseCounter }
        }>
            <div>
                Parent: &nbsp;{count }
                <br />
                <ImmediateChild />
            </div>
        </CounterContext.Provider>
    )
}

export default Parent