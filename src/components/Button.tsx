import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonClasses = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950",
            secondary: "bg-transparent border-white text-white",
        },
        size: {
            sm: "h-10",
        },
    },
});

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonClasses> {}

export default function Button(props: ButtonProps) {
    const { variant, className, size, ...otherProps } = props;

    return (
        <button
            className={buttonClasses({
                variant,
                className,
                size,
            })}
            {...otherProps}
        />
    );
}
