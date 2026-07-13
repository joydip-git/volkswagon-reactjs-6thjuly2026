import React from 'react'

type NameListPropType = {
    listofnames: string[],
    sortNames: () => void
}
const NameList = (props:Readonly<NameListPropType>) => {
    const listOfLiElements: React.JSX.Element[] =
        props.listofnames
            .map(
                (name) => {
                    return <li key={name}>
                        <span>{name}</span>
                    </li>
                }
            )

    return (
        <div>
            <h2>List of People</h2>
            <hr />
            <ul>
                {
                    listOfLiElements
                }
            </ul>
            <br />
            <button type='button' onClick={props.sortNames}>Sort</button>
        </div>
    )
}

export default NameList