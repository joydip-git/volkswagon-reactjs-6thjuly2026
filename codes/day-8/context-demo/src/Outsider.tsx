import { useContext } from "react"
import CounterContext from "./CounterContext"

const Outsider = () => {
    const contextData = useContext(CounterContext)
    return (
        <div>
            Outsider:&nbsp;{contextData.counterValue}
            <br />
            <button type="button" onClick={contextData.counterHandler}>
                Increase
            </button>
        </div>
    )
}

export default Outsider