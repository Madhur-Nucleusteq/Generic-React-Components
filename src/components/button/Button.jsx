import React from 'react'

function Button({
    value,
    theme,
    onClick,
    className,
    icon,
}) {
    return (
        <button
            className={className}
            style={theme}
            onClick={onClick}
        >
            {icon}
            {value}
        </button>
    )
}

export default Button
