import { useState, type SyntheticEvent } from "react"

const Calculator = () => {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [result, setResult] = useState(0)
  const [choice, setChoice] = useState(1)

  const firstHandler = (e: SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement
    console.log(inputElement.value);
    setFirst(Number(inputElement.value))
  }

  const secondHandler = (value: number) => {
    setSecond(value)
  }

  const calculationHandler = () => {
    switch (choice) {
      case 1:
        setResult(first + second)
        break;

      case 2:
        setResult(first - second)
        break;

      case 3:
        setResult(first * second)
        break;

      case 4:
        setResult(first / second)
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
          <div>
            <label htmlFor="radioAdd">Add:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioAdd"
              onChange={() => setChoice(1)} />
            &nbsp;&nbsp;&nbsp;&nbsp;

            <label htmlFor="radioSub">Subtract:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioSub"
              onChange={() => setChoice(2)} />
            &nbsp;&nbsp;&nbsp;&nbsp;

            <label htmlFor="radioMulti">Multiply:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioMulti"
              onChange={() => setChoice(3)} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            
            <label htmlFor="radioDiv">Divide:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioDiv"
              onChange={() => setChoice(4)} />
          </div>
          <div>
            <label htmlFor="txtFirst">First:&nbsp;</label>
            <input type="text" id="txtFirst" value={first} onChange={firstHandler} />
          </div>
          <div>
            <label htmlFor="txtSecond">Second:&nbsp;</label>
            <input type="text" id="txtSecond" value={second} onChange={
              (e) => {
                secondHandler(Number(e.target.value))
              }
            } />
          </div>
          <div>
            <button type="button" onClick={calculationHandler}>Calculate</button>
          </div>
          <div>
            <label htmlFor="txtResult">Result:&nbsp;</label>
            <input type="text" id="txtResult" readOnly value={result} />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Calculator