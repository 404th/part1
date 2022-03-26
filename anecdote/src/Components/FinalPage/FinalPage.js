import { anecdotes } from "../../fakeDB";

export const FinalPage = ({ anecdote }) => {
	let most_voted = 0;
	let most_voted_elem = null;
	for (let elem of anecdotes) {
		if (elem.votes > most_voted) {
			most_voted = elem.votes;
			most_voted_elem = elem;
		}
	}

	return (
		<div>
			<div>
				<h1>Anecdote of the day</h1>
				<p>{anecdote.anecdote}</p>
				<div>has {anecdote.votes} votes</div>
			</div>
			<hr />
			<div>
				<h1>Anecdote with most votes</h1>
				<p>{most_voted_elem.anecdote}</p>
				<div>has {most_voted_elem.votes} votes</div>
			</div>
		</div>
	);
};

export default FinalPage;
