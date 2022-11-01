import React, { HTMLProps } from "react";

type InputProps = {
    onChange: (value: string) => void;
}

export const Input = ({
    onChange,
}: InputProps) => (
    <div className="search">
        <input
            type="search"
            aria-label="Search term"
            onChange={(event) => onChange(event.target.value)}
        />
    </div>
);
