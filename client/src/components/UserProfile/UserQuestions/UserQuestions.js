import { useState } from 'react';
import { connect } from 'react-redux';
import QuestionCard from '../../QuestionList/QuestionCard';
import './UserQuestions.scss';

const UserQuestions = ({ favoriteQuestions, askedQuestions }) => {
    const [questionCategory, setQuestionCategory] = useState('favorite');

    return (
        <section className="user-questions-container">
            <section className="user-questions-btn-container">
                <button className={`questions-btn ${questionCategory === 'favorite' ? 'selected' : 'none'}`}
                    onClick={() => setQuestionCategory('favorite')}
                >
                    Favorite
                </button>

                <button className={`questions-btn ${questionCategory === 'asked' ? 'selected' : 'none'}`}
                    onClick={() => setQuestionCategory('asked')}
                >
                    Asked
                </button>
            </section>

            <section className="user-questions-list">
                {
                    questionCategory === 'favorite' ?
                        favoriteQuestions.map(x => <QuestionCard key={x._id} question={x} isLoggedIn={true} />)
                        :
                        askedQuestions.map(x => <QuestionCard key={x._id} question={x} isLoggedIn={true} />)
                }
            </section>
        </section>
    );
};

const mapStateToProps = (state) => ({
    favoriteQuestions: state.user.favoriteQuestions,
    askedQuestions: state.user.askedQuestions
});

export default connect(mapStateToProps, null)(UserQuestions);