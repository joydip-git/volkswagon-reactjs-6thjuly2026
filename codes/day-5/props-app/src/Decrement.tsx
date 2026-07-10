type DecrementPropType = {
    counterValue: number,
    decreaseHandler: (x: number) => void
}
const Decrement = (args: DecrementPropType) => {
    //args.counterValue = 100
    return (
        <div>
            Counter: &nbsp;{args.counterValue}
            <br />
            <button onClick={() => args.decreaseHandler(2)}> Decrease </button>
        </div>
    )
}

export default Decrement