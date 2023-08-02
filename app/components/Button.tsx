'use-client';

import clsx from "clsx";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined
    fullWidth?: boolean
    children?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    secondary?: boolean
    danger?: boolean
}

const Button: React.FC<ButtonProps> = ({
    fullWidth,
    type,
    children,
    // onClick,
    // disabled,
    // secondary,
    // danger
}) => {
    return (
        <button
            // onClick={onClick}
            // disabled={disabled}
            type={type}
            className={clsx(`
                flex
                justify-center
                rounded-[4px]
                px-3
                py-2
                text-sm
                leading-5
                font-semibold
                text-dark-6
                bg-purple-main
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2`,
                fullWidth && 'w-full',
                // disabled && 'opacity-50 cursor-default',
                // secondary ? 'text-gray-900' : ' text-white',
                // danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600 ',
                // !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
            )}
        >
            {children}
        </button>
    )
}
export default Button