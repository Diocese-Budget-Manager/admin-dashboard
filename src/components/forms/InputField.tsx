// import React from 'react'

export default function InputField({
  label,
  type,
  name,
  required,
  className,
}: {
  label: string;
  type: string;
  name: string;
  required?: boolean;
  className?: string;
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
        required={required}
      />
    </div>
  );
}
