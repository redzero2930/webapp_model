import React, { useState, ChangeEvent } from 'react';

interface BaseProps {
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void; 
}

export function Input(props: BaseProps) {
  const { name, value, placeholder, onChange } = props;
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange} 
    />
  );
}

export default Input;
