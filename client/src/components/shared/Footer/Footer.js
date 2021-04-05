import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; Schooly {new Date().getFullYear()}.</p>
        </footer>
    );
};

export default Footer;