export const PrimaryButton = ({ label, icon, handleClick }) => {
    return (
        <button className="btn primary-btn" onClick={handleClick}>
            {label}
            {icon}
        </button>
    );
};
