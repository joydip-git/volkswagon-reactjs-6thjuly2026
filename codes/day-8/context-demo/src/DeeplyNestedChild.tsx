import { useContext } from "react"
import CounterContext from "./CounterContext"

const DeeplyNestedChild = () => {

    const contextData = useContext(CounterContext)
    return (
        <div>
            DeeplyNestedChild
            <br />
            <div>
                <span>Counter:&nbsp;{contextData.counterValue}</span>
                <br />
                <button type="button" onClick={contextData.counterHandler}>Increase</button>
            </div>
        </div>
    )
}

export default DeeplyNestedChild