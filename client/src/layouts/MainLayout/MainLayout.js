import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout-wrapper">
            <Header />

            {children}

            <Footer />
        </div>
    );
};

export default MainLayout;