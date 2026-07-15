import { createContext } from "react";

type CounterContextType = {
    counterValue: number,
    counterHandler: () => void
}
const CounterContext = createContext<CounterContextType>({
    counterValue: 0,
    counterHandler: () => { }
})
export default CounterContext