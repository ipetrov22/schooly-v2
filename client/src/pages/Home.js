import IntroText from '../components/IntroText';
import QuestionList from '../components/QuestionList';

const Home = () => {
    return (
        <div className="home-page">
            <IntroText />

            <QuestionList />
        </div>
    );
};

export default Home;
