import './Backdrop.scss';

const Backdrop = ({setOpen}) => {
    return (
        <div className="backdrop-wrapper" onClick={() => setOpen(false)}></div>
    );
};

export default Backdrop;