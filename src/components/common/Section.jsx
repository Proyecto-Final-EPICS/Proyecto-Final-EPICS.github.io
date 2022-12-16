import React from 'react'
import Title from './Title'
import GoToButton from './GoToButton'

function Section({ title, backgroundColor, buttonColor, textColor, description, buttonTextColor, image }) {
    return (
        <div className={'section ' + backgroundColor}>
            <div>
                <Title title={title} textColor={textColor} />
            </div>
            <div>
                <div className='part'>
                    <p className={textColor}>
                        {description}
                    </p>
                    <GoToButton backgroundColor={buttonColor} textColor={buttonTextColor} />
                </div>
                <div className='part'>
                    <img src={image} alt="" className='w-[500px]' />
                </div>
            </div>
        </div>
    )
}

export default Section