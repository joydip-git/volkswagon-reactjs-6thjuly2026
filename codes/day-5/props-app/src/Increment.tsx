type IncrementPropType = {
    counterValue: number,
    increaseHandler: (x: number) => void
}
const Increment = (args: Readonly<IncrementPropType>) => {
    //args.counterValue = 100
    return (
        <div>
            Counter: &nbsp;{args.counterValue}
            <br />
            <button onClick={() => args.increaseHandler(1)}> Increase </button>
        </div>
    )
}

export default Increment