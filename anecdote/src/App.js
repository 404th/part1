import { useState } from "react";
import FinalPage from "./Components/FinalPage/FinalPage";
import { anecdotes } from "./fakeDB";

function App() {
	function randomNumberGenerator() {
		return Math.floor(Math.random() * anecdotes.length);
	}

	let [ancs, setAncs] = useState(anecdotes);
	let [selected, setSelected] = useState(0);
	let [isButtonDisabled, setIsButtonDisabled] = useState(false);

	function selectNextAnecdote() {
		setSelected(randomNumberGenerator());
	}

	function vote(selected_id) {
		ancs.forEach((elem) => {
			if (elem.id === selected_id) {
				setAncs([...ancs, { ...elem, votes: elem.votes++ }]);
			}
			return;
		});
	}

	function finishVoting() {
		setIsButtonDisabled(true);
	}

	return (
		<div className='App'>
			<div>{anecdotes[selected].anecdote}</div>
			<div>{anecdotes[selected].votes}</div>
			<button
				disabled={isButtonDisabled}
				onClick={() => selectNextAnecdote()}>
				next anecdote
			</button>
			<button
				disabled={isButtonDisabled}
				onClick={() => vote(anecdotes[selected].id)}>
				vote
			</button>
			<button onClick={() => finishVoting()}>finish vote</button>
			<>
				{isButtonDisabled ? (
					<FinalPage anecdote={anecdotes[randomNumberGenerator()]} />
				) : (
					<></>
				)}
			</>
		</div>
	);
}

export default App;
