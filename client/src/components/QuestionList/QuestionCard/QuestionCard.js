import { Link } from 'react-router-dom';
import subjects from '../../../dictionaries/subjects';
import './QuestionCard.scss';

const QuestionCard = ({ question, isLoggedIn }) => {
    return (
        <article className="question-card">
            <section className="date-grade-container">
                <span className="grade">{question.grade} Grade</span>
                <span className="date">{new Date(question.date).toString().substring(4,21)}</span>
            </section>

            <h2 className="subject">{subjects[question.subject]}</h2>

            <p className="title">{question.title}</p>

            <Link to={`/question/${question._id}`}>
                <button className="open-btn">Open</button>
            </Link>
        </article>
    );
};

export default QuestionCard;