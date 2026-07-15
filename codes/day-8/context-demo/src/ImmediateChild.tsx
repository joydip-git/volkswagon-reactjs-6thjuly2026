import DeeplyNestedChild from "./DeeplyNestedChild"

const ImmediateChild = () => {
    return (
        <div>
            ImmediateChild
            <br />
            <DeeplyNestedChild />
        </div>
    )
}

export default ImmediateChild