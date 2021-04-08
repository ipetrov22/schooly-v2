import { useState } from 'react';
import QuestionCard from '../../QuestionList/QuestionCard';
import './UserQuestions.scss';

const UserQuestions = () => {
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
                
            </section>
        </section>
    );
};

export default UserQuestions;