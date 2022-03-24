const Action = props => {
    return (
        <div>
            <button onClick={() => props.clickGood()}>good</button>
            <button onClick={() => props.clickNeutral()}>neutral</button>
            <button onClick={() => props.clickBad()}>bad</button>
        </div>
    )
}

export default Action