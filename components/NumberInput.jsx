export const NumberInput = ({ id, value, handleChange, placeholder }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>Cantidad:</label>
            <select
                name=""
                id={id}
                value={value}
                onChange={(event) => handleChange(event.target.value)}
                placeholder={placeholder}
            >
                <option value="1">1 kilogram</option>
                <option value="2">2 kilogram</option>
                <option value="3">3 kilogram</option>
                <option value="4">4 kilogram</option>
                <option value="5">5 kilogram</option>
                <option value="6">6 kilogram</option>
            </select>
        </div>
    );
};
