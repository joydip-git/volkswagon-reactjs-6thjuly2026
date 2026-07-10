import { useState } from "react"
import CalculationChoice from "../calculation-choice/CalculationChoice"
import CalculationInput from "../calculation-input/CalculationInput"
import CalculationResult from "../calculation-result/CalculationResult"
//import type { ValueProps } from "../../models/value-props"
import type { InputType } from "../../models/input-type"

type CalculatorStateType = {
  first: InputType,
  second: InputType
}
const Calculator = () => {

  const [values, setValues] = useState<CalculatorStateType>({
    first: { value: 0, name: "first" },
    second: { value: 0, name: "second" }
  })
  const [result, setResult] = useState(0)
  const [choice, setChoice] = useState(1)


  const choiceHandler = (value: number) => setChoice(value)
  const valueHandler = (propName: string, value: number) => {
    
    setValues(
      (currentState) => {
        const newState: CalculatorStateType = {
          ...currentState,
          [propName]: {
            name:propName,
            value: value
          }
        }

        return newState
      }
    )
  }
  const calculationHandler = () => {
    switch (choice) {
      case 1:
        setResult(values.first.value + values.second.value)
        break;

      case 2:
        setResult(values.first.value - values.second.value)
        break;

      case 3:
        setResult(values.first.value * values.second.value)
        break;

      case 4:
        setResult(values.first.value / values.second.value)
        break;

      default:
        setResult(0)
        break;
    }
  }

  return (
    <div>
      <form>
        <fieldset>
          <legend>Calculator: &nbsp;</legend>

          {/* separate component for radio buttons -> CalculationChoice */}

          <CalculationChoice updateChoice={choiceHandler} />

          {/* separate component for this inputs -> CalculatorInput */}

          <CalculationInput
            firstValue={values.first}
            secondValue={values.second}
            valueHandler={valueHandler}
            calculateFn={calculationHandler} />

          {/* separate component for result -> CalculationResult */}
          <CalculationResult resultValue={result} />

        </fieldset>
      </form>
    </div>
  )
}

export default Calculator