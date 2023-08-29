"use client";

import React from "react";

interface InputProps {
  label: string;
  htmlFor: string;
  labelClassName: string;
  id: string;
  name: string;
  type: string;
  autocomplete?: string;
  required: boolean;
  className: string;
  value?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const {
    label,
    htmlFor,
    labelClassName,
    id,
    name,
    type,
    autocomplete,
    required,
    className,
    value,
    onChange,
  } = props;

  return (
    <div>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <div className="mt-2">
        <input
          value={value!}
          id={id}
          name={name}
          type={type}
          autoComplete={autocomplete}
          required={required}
          className={className}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
