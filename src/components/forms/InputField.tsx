// import React from 'react'

export default function InputField({
  label,
  type,
  name,
  value,
  required,
  className,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  value?: string | number;
  required?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2">
        {label}
      </label>
      <input
        className={`shadow form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
