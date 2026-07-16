import { changeActionCreator, resetActionCreator } from "./redux/nameslice";
import { useTypedDispatch, useTypedSelector } from "./redux/typedhooks";

const Person = () => {
    const nameState = useTypedSelector(stateMap => stateMap.nameState)
    const dispatch = useTypedDispatch()

    const nameHandler = (value: string) => {
        const changeAction = changeActionCreator(value)
        dispatch(changeAction)
    }

    console.log('Person rendered');
    return (
        <>
            <h2>Welcome to Redux: {nameState.name}</h2>
            <br />
            <div>
                <label htmlFor="txtName">Name: &nbsp;</label>
                <input
                    type="text" id="txtName"
                    value={nameState.name}
                    onChange={
                        (e) => {
                            nameHandler(e.target.value)
                        }
                    } />
            </div>
            <br />
            <button
                type="button"
                onClick={
                    () => dispatch(resetActionCreator())
                }
            >
                Reset
            </button>
        </>
    )
}

export default Person