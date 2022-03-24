import Part from "../Part/Part"

function Content(props){
    return (
        <div>
            {
                props.parts.map((p, ind) => <Part key={ind} part={p.part} exercises={p.exercises}/>)
            }
        </div>
    )
}

export default Content