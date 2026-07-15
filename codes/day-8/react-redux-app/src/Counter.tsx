//import { useSelector, useDispatch } from "react-redux"
//import type { AppStateType } from "./redux/app-store"

import { decreaseActionCreator, increaseActionCreator } from "./redux/action-creators"
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks"

const Counter = () => {
    // const counterState = useSelector((stateMap: AppStateType) => stateMap.countState)
    const counterState = useTypedSelector((stateMap) => stateMap.countState)
    //const dispatch = useDispatch()
    const dispatch = useTypedDispatch()

    const counterHandler = (choice: number) => {
        switch (choice) {
            case 1:
                dispatch(increaseActionCreator())
                break;

            case 2:
                dispatch(decreaseActionCreator())
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