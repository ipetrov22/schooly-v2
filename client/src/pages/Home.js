import IntroText from '../components/IntroText';
import QuestionList from '../components/QuestionList';

const Home = () => {
    window.scroll(0,0);
    
    return (
        <div className="home-page">
            <IntroText />

            <QuestionList />
        </div>
    );
};

export default Home;
