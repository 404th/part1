import { useState } from "react"
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"
import Total from "./Components/Total/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part:'Fundamentals of React',
        exercises:10
      },
      {
        part:'Using props to pass data',
        exercises:7
      },
      {
        part:'State of a component',
        exercises:14
      },
    ]
  }

  let [ counter, setCounter ] = useState(0)

  setTimeout( () => {
      setCounter(counter+1)
    }, 1000)

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
        />
      <Total
        parts={course.parts}
      />
      <p>{ counter }</p>
    </div>
  )
}

export default App