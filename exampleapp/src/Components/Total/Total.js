import { Fragment } from "react"

function Total(props){
    let total = 0
    props.parts.forEach( p => { total += p.exercises} )

    return (
        <Fragment>
             <p>Number of exercises {total}</p>
        </Fragment>
    )
}

export default Total