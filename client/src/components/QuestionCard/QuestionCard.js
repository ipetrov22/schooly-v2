import './QuestionCard.scss';

const QuestionCard = () => {
    return (
        <article className="question-card">
            <section className="date-grade-container">
                <span className="grade">10 Grade</span>
                <span className="date">26 Mar 2021</span>
            </section>

            <h2 className="subject">Math</h2>

            <p className="title">I need help with this and that and something else</p>

            <button className="open-btn">Open</button>
        </article>
    );
};

export default QuestionCard;