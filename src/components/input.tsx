import React from "react"

type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ label, placeholder, handleChange, ...props}: inputProps) => (
    <div
        className="
            flex flex-col
            gap-2
        "
    >
        <label
            className="text-sm"
        >
            {label}
        </label>
        <input 
            {...props}
            placeholder={placeholder}
            onChange={handleChange}
            className="
                border-2
                border-gray-400
                p-2
                rounded-xl
            "
        />
    </div>
)