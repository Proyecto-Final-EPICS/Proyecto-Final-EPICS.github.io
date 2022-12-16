import React from 'react'
import Hero from '../components/Home/Hero'
import Section from '../components/common/Section'

function Home() {
    return (
        <div className='home'>
            <Hero />
            <Section
                title='Play&Learn'
                backgroundColor={'bg-terciaryPlayLearn'}
                textColor={'text-white'}
                description={'An unity application available for Android devices focused on the task of teaching English to people whose native language is Spanish and suffer from visual disabilities and bad sight.'}
                buttonColor={'bg-secondaryPlayLearn'}
                image={'./PlayLearnBanner.svg'}
            />
            <Section
                title='eyeland'
                backgroundColor={'bg-primaryEyeland'}
                textColor={'text-white'}
                description={'An unity application available for Android devices focused on the task of teaching English and teamwork to people whose native language is Spanish.'}
                image={'./EyeLandBanner.svg'}
                buttonColor={'bg-secondaryEyeland'}
            />
        </div>
    )
}

export default Home