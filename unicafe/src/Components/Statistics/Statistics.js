const Statistics = ({ feedbacks, overall, isTouched }) => {
    return (
        <div>
            {
                isTouched ? <div>
                <h2>Statistics</h2>
                <p>Good: { feedbacks.good }</p>
                <p>Neutral: { feedbacks.neutral }</p>
                <p>Bad: { feedbacks.bad }</p>
                <hr />
                <p>Average: { Number(overall.average) }</p>
                <p>Positive: { Number(overall.positive)*100 }%</p>
            </div> : <div>
                <p>No feedback given</p>
            </div>
            }
        </div>
    )
}

export default Statistics