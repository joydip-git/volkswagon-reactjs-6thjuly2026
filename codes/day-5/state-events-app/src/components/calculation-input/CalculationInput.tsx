//import { ValueProps } from "../../models/value-props"
import type { InputType } from "../../models/input-type"

type CalculationInputPropType = {
    firstValue: InputType,
    secondValue: InputType,
    valueHandler: (propName: string, value: number) => void,
    calculateFn: () => void
}
const CalculationInput = (props: Readonly<CalculationInputPropType>) => {
    return (
        <>
            <div>
                <label htmlFor="txtFirst">First:&nbsp;</label>
                <input type="text"
                    id="txtFirst"
                    value={props.firstValue.value}
                    name={props.firstValue.name}
                    onChange={
                        // (e) => props.valueHandler(props.firstValue.name, +e.target.value)
                        (e) => props.valueHandler(e.target.name,
                            +e.target.value)
                    } />
            </div>
            <div>
                <label htmlFor="txtSecond">Second:&nbsp;</label>
                <input type="text" id="txtSecond"
                    value={props.secondValue.value}
                    onChange={
                        (e) => {
                            props.valueHandler(props.secondValue.name,
                                Number(e.target.value))
                        }
                    } />
            </div>
            <div>
                <button type="button" onClick={props.calculateFn}>
                    Calculate
                </button>
            </div>
        </>
    )
}

export default CalculationInput