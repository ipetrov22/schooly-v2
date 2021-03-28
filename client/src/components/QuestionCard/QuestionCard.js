import './QuestionCard.scss';

const QuestionCard = () => {
    return (
        <article className="question-card">
            <span className="date">26 Mar 2021</span>

            <h2 className="subject">Math</h2>

            <span className="grade">10 grade</span>

            <p className="description">Lorem ipsum dolor amet, I don't remember the text ahead</p>

            <button className="question-btn">Open</button>
        </article>
    );
};

export default QuestionCard;