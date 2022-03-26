import StatisticsLine from "../StatisticsLine/StatisticsLine";

const Statistics = ({ feedbacks, overall }) => {
	return (
		<div>
			{overall.isTouched ? (
				<table>
					<StatisticsLine text={"Good"} value={feedbacks.good} />
					<StatisticsLine
						text={"Neutral"}
						value={feedbacks.neutral}
					/>
					<StatisticsLine text={"Bad"} value={feedbacks.bad} />
					<StatisticsLine text={"All"} value={overall.all} />
					<StatisticsLine text={"Average"} value={overall.average} />
					<StatisticsLine
						text={"Positive"}
						value={`${overall.positive * 100}%`}
					/>
				</table>
			) : (
				<div>
					<p>No feedback given</p>
				</div>
			)}
		</div>
	);
};

export default Statistics;
