import React from 'react'
import Title from '../common/Title'
import PersonCard from './PersonCard'

function Section({ title, people }) {
    return (
        <div className='sectionOurTeam'>
            <div>
                <Title title={title} textColor={'text-black'} />
            </div>
            <div className='flex items-center justify-center flex-wrap'>
                {
                    people.map((person, index) => {
                        return (
                            <PersonCard
                                key={index}
                                name={person.name}
                                img={person.img}
                                link={person.link}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section