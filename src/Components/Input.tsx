import React, { useState } from "react";

interface BaseProps {
  name: string;
  value?: string
  placeholder?: string;
}

export function Input(props: BaseProps) {
  const { name, placeholder } = props;

  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
}

export default Input;