export const anecdotes = [
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote: "If it hurts, do it more often",
	},
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote: "Adding manpower to a late software project makes it later!",
	},
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote:
			"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	},
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote:
			"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	},
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote: "Premature optimization is the root of all evil.",
	},
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote:
			"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	},
	{
		id: randomIDgenerator(),
		votes: 0,
		anecdote:
			"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	},
];

function randomIDgenerator() {
	let new_id = Math.floor(Math.random() * 100000);
	return new_id;
}
