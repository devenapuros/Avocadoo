import { MinusIcon } from "@icons/MinusIcon";
import { PlusIcon } from "@icons/PlusIcon";

export const NumberInput = ({ id, value, handleChange, placeholder }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>Cantidad:</label>
            <div className="input-field">
                <button
                    className="input-btn left"
                    disabled={value === 1}
                    onClick={() => handleChange(value - 1)}
                >
                    <MinusIcon />
                </button>
                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    readOnly
                />
                <button
                    className="input-btn right"
                    onClick={() => handleChange(value + 1)}
                >
                    <PlusIcon />
                </button>
            </div>
        </div>
    );
};
