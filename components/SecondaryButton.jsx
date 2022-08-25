export const SecondaryButton = ({ label, icon, handleClick }) => {
    return (
        <button className="btn secondary-btn" onClick={handleClick}>
            {label}
            {icon}
        </button>
    );
};
