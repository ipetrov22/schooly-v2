import './Drawer.scss';

const Drawer = ({ open }) => {
    return (
        <nav className={`drawer-container ${open && 'open'}`}>

        </nav>
    );
};

export default Drawer;