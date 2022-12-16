import React from 'react'
import Title from '../common/Title'

function Section({ title, text }) {

    const ps = text.split('\n')

    return (
        <div className='sectionSocialImpact'>
            <Title title={title} textColor={'text-black'} />
            {
                ps.map((p, index) => {
                    return (
                        <p key={index} className='text-black'>
                            {p}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Section