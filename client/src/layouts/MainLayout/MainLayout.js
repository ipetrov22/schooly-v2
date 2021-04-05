import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

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