import React from 'react';

type CheckboxProps = {
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    };

    return (
        <label className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5"
                checked={checked}
                onChange={handleChange}
            />
            <span className="ml-2">{label}</span>
        </label>
    );
};

export default Checkbox;
