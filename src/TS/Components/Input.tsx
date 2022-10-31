import React, { HTMLProps } from "react";

type InputProps = {
    // value: string;
    onUpdate: (value: string) => void;
} & HTMLProps<HTMLInputElement>;

export const Input = ({
    value,
    onUpdate,
}: InputProps) => {
    return (
        <input
            aria-label="Search term"
            onChange={(event) => onUpdate(event.target.value)} />
    );
};
