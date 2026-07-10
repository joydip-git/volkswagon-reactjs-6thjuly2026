type CalculationResultPropType = {
    resultValue: number
}
const CalculationResult = (props:Readonly<CalculationResultPropType>) => {
    return (
        <div>
            <label htmlFor="txtResult">Result:&nbsp;</label>
            <input type="text" id="txtResult" readOnly
                value={props.resultValue} />
        </div>
    )
}

export default CalculationResult