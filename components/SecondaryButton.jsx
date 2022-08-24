export const SecondaryButton = ({ label, icon, handleClick }) => {
    return (
        <button className="btn secondary-btn">
            {label}
            {icon}
        </button>
    );
};
