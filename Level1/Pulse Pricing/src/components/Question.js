const Question = ({ question, answer }) => {
    return (
        <details className="question--container" open onClick={(e) => e.preventDefault()}>
            <summary className="question">{question}</summary>
            <p className="answer">{answer}</p>
        </details>
    )
}

export default Question;