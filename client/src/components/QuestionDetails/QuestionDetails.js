import './QuestionDetails.scss';

const QuestionDetails = () => {
    return (
        <div className="question-details-wrapper">
            <section className="subject-grade-container">
                <span className="subject">Math</span>
                <span className="grade">10 Grade</span>
            </section>

            <h1 className="title">I need help with this that and something else</h1>

            <section className="date-author-container">
                <span className="date">26 Mar 2021</span>
                <span className="author"> by user1234</span>
            </section>

            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default QuestionDetails;