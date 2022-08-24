export const PrimaryButton = ({ label, icon, handleClick }) => {
    return (
        <button className="btn primary-btn">
            {label}
            {icon}
        </button>
    );
};
