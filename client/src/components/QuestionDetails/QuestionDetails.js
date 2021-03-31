import './QuestionDetails.scss';

const QuestionDetails = () => {
    return (
        <div className="question-details-wrapper">
            <span className="date">26 Mar 2021</span>

            <section className="subject-grade-container">
                <span className="subject">Math</span>
                <span className="grade">10 Grade</span>
            </section>

            <h1 className="title">I need help with this that and something else</h1>
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