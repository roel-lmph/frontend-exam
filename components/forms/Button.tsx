import React from 'react';

type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            className="bg-primary text-white uppercase rounded-full px-6 py-3 text-sm font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;