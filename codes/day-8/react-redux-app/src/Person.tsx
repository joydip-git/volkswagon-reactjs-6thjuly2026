//import { useSelector, useDispatch } from "react-redux";
//import type { AppStateType } from "./redux/app-store";

import { changeActionCreator } from "./redux/action-creators";
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks";

const Person = () => {
    // const nameState = useSelector((stateMap: AppStateType) => stateMap.nameState)
    const nameState = useTypedSelector(stateMap => stateMap.nameState)
    //const dispatch = useDispatch()
    const dispatch = useTypedDispatch()

    const nameHandler = (value: string) => {
        const changeAction = changeActionCreator(value)
        // dispatch({ type: 'abcd', x: 100 })
        dispatch(changeAction)
    }

    console.log('Person rendered');
    return (
        <>
            <h2>Welcome to Redux: {nameState.name}</h2>
            <br />
            <div>
                <label htmlFor="txtName">Name: &nbsp;</label>
                <input type="text" id="txtName"
                    value={nameState.name}
                    onChange={
                        (e) => {
                            nameHandler(e.target.value)
                        }
                    } />
            </div>
        </>
    )
}

export default Person