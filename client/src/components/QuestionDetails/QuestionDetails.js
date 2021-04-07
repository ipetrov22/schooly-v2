import { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { getOneQuestion, clearQuestion, deleteQuestion } from '../../actions/questionActions';
import { favoriteQuestion } from '../../actions/userActions';
import transformDate from '../../helpers/transformDate';
import CommentsSection from './CommentsSection';
import { useClean } from '../../hooks';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { NotificationContext } from '../../contexts/NotificationContext';
import './QuestionDetails.scss';

const QuestionDetails = ({
    firebaseUser,
    userId,
    favoriteQuestions,
    question,
    getOneQuestion,
    clearQuestion,
    deleteQuestion,
    favoriteQuestion,
    match
}) => {
    const { setNotification } = useContext(NotificationContext);
    const history = useHistory();

    useClean(clearQuestion);

    useEffect(() => {
        if (firebaseUser && firebaseUser !== true) {
            const { questionId } = match.params;

            firebaseUser.getIdToken()
                .then(async (idToken) => await getOneQuestion(questionId, idToken))
                .catch(console.log);
        }
    }, [firebaseUser, getOneQuestion, match.params]);

    const onDelete = () => {
        if (firebaseUser && firebaseUser !== true) {
            const { questionId } = match.params;

            firebaseUser.getIdToken()
                .then(async (idToken) => {
                    await deleteQuestion(questionId, idToken);
                    setNotification({ message: 'Question deleted.', type: 'success' });
                    history.push('/');
                })
                .catch((err) => setNotification({ message: err, type: 'error' }));
        }
    };

    const onFavorite = () => {
        if (firebaseUser) {
            firebaseUser.getIdToken()
                .then(async (idToken) => {
                    await favoriteQuestion(question, idToken);
                })
                .catch((err) => setNotification({ message: err, type: 'error' }));
        }
    };

    const onUnfavorite = () => {

    };

    return (
        question.title ? <div className="question-details-wrapper">

            <section className="question-manage-container">
                {
                    userId === question.author._id ?
                        <>
                            <Link to={`/question/edit/${question._id}`}>
                                <button className="manage-btn"><AiFillEdit size="25px" fill="#3f51b5" /></button>
                            </Link>
                            <button className="manage-btn" onClick={onDelete}>
                                <MdDelete size="25px" fill="#ff0000" />
                            </button>
                        </>
                        : favoriteQuestions.some(x => x._id === question._id) ?

                            <button className="manage-btn" onClick={onUnfavorite}>
                                <MdFavorite size="25px" fill="#e31b1b" />
                            </button>
                            :
                            <button className="manage-btn" onClick={onFavorite}>
                                <MdFavoriteBorder size="25px" fill="#e31b1b" />
                            </button>
                }
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
    userId: state.user._id,
    favoriteQuestions: state.user.favoriteQuestions,
    question: state.question.question
});

const mapDispatchToProps = {
    getOneQuestion,
    clearQuestion,
    deleteQuestion,
    favoriteQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);