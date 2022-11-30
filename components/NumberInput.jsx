import { PlusIcon } from "@icons/PlusIcon";
import { SubstractIcon } from "@icons/SubstractIcon";

export const NumberInput = ({ placeholder }) => {
    return (
        <div className="input-container">
            <label htmlFor="">Cantidad:</label>
            <select name="" id="" value={1}>
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
