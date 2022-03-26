import { useState, useEffect } from "react"
import Header from "./Components/Header/Header"
import Action from "./Components/Action/Action"
import Statistics from "./Components/Statistics/Statistics"

function App() {
	const [ overall, setOverall ] = useState({
		average: 0,
		positive: 0,
		all: 0,
		isTouched: false,
	})

	const [ feedbacks, setFeedbacks ] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	})

	const clickGood = () => {
		setOverall({
			...overall,
			isTouched: true,
		})
		setFeedbacks({
			...feedbacks,
			good: feedbacks.good+1,
		})
	}
	
	const clickNeutral = () => {
		setOverall({
			...overall,
			isTouched: true,
		})
		setFeedbacks({
			...feedbacks,
			neutral: feedbacks.neutral+1,
		})
	}

	const clickBad = () => {
		setOverall({
			...overall,
			isTouched: true,
		})
		setFeedbacks({
			...feedbacks,
			bad: feedbacks.bad+1,
		})
	}

	useEffect( () => {
		let summ = feedbacks.good + feedbacks.bad + feedbacks.neutral
		let average = 0
		let positive = 0

		if (summ === 0) {
			average = 0
			positive = 0
		} else {
			average = (feedbacks.good - feedbacks.bad)/summ
			positive = feedbacks.good/summ
		}
		setOverall({
			...overall,
			average,
			positive,
			all: summ,
		})
	}, [ feedbacks ] )


  	return (
  		<div>
			<Header />
			<Action clickGood={clickGood} clickNeutral={clickNeutral} clickBad={clickBad} />
			<h2>Statistics</h2>
			<Statistics feedbacks={feedbacks} overall={overall} />
		</div>
	)
}
  export default App;
