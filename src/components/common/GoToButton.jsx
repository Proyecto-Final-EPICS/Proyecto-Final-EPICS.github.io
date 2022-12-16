import React from 'react'

function GoToButton({ backgroundColor, textColor, link }) {
    return (
        <a href={link} className={'button flex items-center justify-between hover:cursor-pointer ' + backgroundColor}>
            <p className={textColor + " font-bold"}>GO TO</p>
            <img src="./Arrow.svg" alt="" />
        </a>
    )
}

export default GoToButton