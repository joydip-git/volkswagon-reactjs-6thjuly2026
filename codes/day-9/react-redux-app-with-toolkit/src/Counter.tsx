import { decreaseActionCreator, increaseActionCreator } from "./redux/countslice"
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks"

const Counter = () => {
    const counterState = useTypedSelector((stateMap) => stateMap.countState)
    const dispatch = useTypedDispatch()

    const counterHandler = (choice: number) => {
        switch (choice) {
            case 1:
                dispatch(increaseActionCreator(1))
                break;

            case 2:
                dispatch(decreaseActionCreator(1))
                break;

            default:
                break;
        }
    }
    console.log('Counter rendered');
    return (
        <div>
            Counter:&nbsp; {counterState.count}
            <br />
            <button type="button" onClick={() => counterHandler(1)}>Increase</button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" onClick={() => counterHandler(2)}>Decrease</button>
        </div>
    )
}

export default Counter