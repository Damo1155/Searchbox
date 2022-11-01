import React, { HTMLProps } from "react";

type InputProps = {
    onUpdate: (value: string) => void;
} & HTMLProps<HTMLInputElement>;

export const Input = ({
    onUpdate,
}: InputProps) => {
    return (
        <div className="search">
            <input
                type="search"
                aria-label="Search term"
                onChange={(event) => onUpdate(event.target.value)}
            />
        </div>
    );
};
