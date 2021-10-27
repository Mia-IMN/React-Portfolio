import React from 'react'

const PagesBackground = ({ text, bgColor }) => {
    return (
        <div className="pages_background" style={{backgroundColor: bgColor}}>
            <h1 className="about">{text}</h1>
        </div>
    )
}

export default PagesBackground
