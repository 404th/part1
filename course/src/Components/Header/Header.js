import { Fragment } from "react"

function Header(props){
    return (
        <Fragment>
            <h1>{props.course}</h1>
        </Fragment>
    )
}

export default Header
