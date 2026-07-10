type CalculationChoicePropType = {
    updateChoice: (x: number) => void
}
const CalculationChoice = (props:Readonly<CalculationChoicePropType>) => {
    return (
        <div>
            <label htmlFor="radioAdd">Add:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioAdd"
                onChange={() => props.updateChoice(1)} />
            &nbsp;&nbsp;&nbsp;&nbsp;

            <label htmlFor="radioSub">Subtract:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioSub"
                onChange={() => props.updateChoice(2)} />
            &nbsp;&nbsp;&nbsp;&nbsp;

            <label htmlFor="radioMulti">Multiply:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioMulti"
                onChange={() => props.updateChoice(3)} />
            &nbsp;&nbsp;&nbsp;&nbsp;

            <label htmlFor="radioDiv">Divide:&nbsp;</label>
            <input type="radio" name="calcgroup" id="radioDiv"
                onChange={() => props.updateChoice(4)} />
        </div>
    )
}

export default CalculationChoice