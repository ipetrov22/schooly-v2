import Header from "../components/Header";
import IntroText from "../components/IntroText";
import QuestionList from "../components/QuestionList";

const Home = () => {
    return (
        <div className="home-page">
            <Header />

            <IntroText />

            <QuestionList />
        </div>
    );
};

export default Home;
