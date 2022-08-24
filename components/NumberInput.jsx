import { PlusIcon } from "@icons/PlusIcon";
import { SubstractIcon } from "@icons/SubstractIcon";

export const NumberInput = () => {
    return (
        <div className="input-container">
            <button className="btn input-btn left">
                <SubstractIcon />
            </button>
            <input type="number" min="1" step="1" placeholder="Quantity (KG)" />
            <button className="btn input-btn right">
                <PlusIcon />
            </button>
        </div>
    );
};
