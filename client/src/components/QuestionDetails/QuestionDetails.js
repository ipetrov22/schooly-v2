import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOneQuestion, clearQuestion } from '../../actions/questionActions';
import transformDate from '../../helpers/transformDate';
import CommentsSection from './CommentsSection';
import { useClean } from '../../hooks';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import './QuestionDetails.scss';

const QuestionDetails = ({ firebaseUser, question, getOneQuestion, clearQuestion, match }) => {
    useClean(clearQuestion);

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

            <section className="question-manage-container">
                <button class="manage-btn"><AiFillEdit size="25px" fill="#3f51b5" /></button>
                <button class="manage-btn"><MdDelete size="25px" fill="#ff0000" /></button>
            </section>

            <p className="subject-grade">
                <span className="subject">{question.subject}</span> - <span className="grade">{question.grade} Grade</span>
            </p>

            <h1 className="title">{question.title}</h1>

            <p className="date-author">
                <span className="date">
                    {transformDate(question.date)}
                </span> by <span className="author">{question.author.username}</span>
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
    getOneQuestion,
    clearQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);