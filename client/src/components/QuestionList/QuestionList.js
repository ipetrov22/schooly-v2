import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllQuestions, clearAllQuestions } from '../../actions/questionActions';
import { useClean } from '../../hooks';
import QuestionCard from './QuestionCard';
import './QuestionList.scss';

const QuestionList = ({ firebaseUser, questions, getAllQuestions, clearAllQuestions }) => {
    useClean(clearAllQuestions);

    useEffect(() => {
        (async () => {
            await getAllQuestions();
        })();
    }, [getAllQuestions]);

    return (
        <div className="question-list">
            {questions.map(x => <QuestionCard key={x._id} question={x} isLoggedIn={!!firebaseUser} />)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    firebaseUser: state.user.firebaseUser,
    questions: state.question.questions
});

const mapDispatchToProps = {
    getAllQuestions,
    clearAllQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);