import React from 'react'

const Button = ({text, color}) => {
    return (
        <div className="button">
            <button style={{backgroundColor: color}}>{text}</button>
        </div>
    )
}

export default Button
