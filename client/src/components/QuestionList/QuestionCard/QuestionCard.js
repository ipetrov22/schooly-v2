import { Link } from 'react-router-dom';
import subjects from '../../../dictionaries/subjects';
import transformDate from '../../../helpers/transformDate';
import './QuestionCard.scss';

const QuestionCard = ({ question, isLoggedIn }) => {
    return (
        <article className="question-card">
            <section className="date-grade-container">
                <span className="grade">{question.grade} Grade</span>
                <span className="date">{transformDate(question.date)}</span>
            </section>

            <h2 className="subject">{subjects[question.subject]}</h2>

            <p className="title">{question.title}</p>

            {
                isLoggedIn ?
                    <Link to={`/question/${question._id}`}>
                        <button className="open-btn">Open</button>
                    </Link>
                    :
                    <Link to={`/login`}>
                        <button className="open-btn disabled">Login to open</button>
                    </Link>

            }
        </article>
    );
};

export default QuestionCard;