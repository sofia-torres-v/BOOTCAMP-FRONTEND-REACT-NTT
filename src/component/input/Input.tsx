import React, { FC } from "react";
import "./input.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ value, onChange, icon, placeholder, className }) => {
  return (
    <div className="input-category">
      <input
        className={`input-category__input ${className}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}  
      />
      {icon && <div className="input-category__icon">{icon}</div>}
    </div>
  );
};

export default Input;