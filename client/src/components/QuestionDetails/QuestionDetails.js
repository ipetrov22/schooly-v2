import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOneQuestion } from '../../actions/questionActions';
import transformDate from '../../helpers/transformDate';
import CommentsSection from '../CommentsSection';
import './QuestionDetails.scss';

const QuestionDetails = ({ firebaseUser, question, getOneQuestion, match }) => {
    useEffect(() => {
        if (firebaseUser && firebaseUser !== true) {
            const { questionId } = match.params;

            firebaseUser.getIdToken()
                .then(async (idToken) => await getOneQuestion(questionId, idToken))
                .catch(console.log);
        }
    }, [firebaseUser, getOneQuestion, match.params]);

    return (
        question.title ? <div className="question-details-wrapper">
            <p className="subject-grade">
                <span className="subject">{question.subject}</span> - <span className="grade">{question.grade} Grade</span>
            </p>

            <h1 className="title">{question.title}</h1>

            <p className="date-author">
                <span className="date">{transformDate(question.date)}</span> by <span className="author">user1234</span>
            </p>

            <p className="description">
                {question.description}
            </p>

            <CommentsSection />
        </div> : null
    );
};

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser,
    question: state.question.question
});

const mapDispatchToProps = {
    getOneQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);