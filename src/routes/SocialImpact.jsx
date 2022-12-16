import React from 'react'
import Section from '../components/SocialImpact/Section'

function SocialImpact() {
    return (
        <div className='socialImpact'>
            <h1>
                Social Impact
            </h1>
            <Section
                title={'Problem'}
                text={'Historically, protecting the rights of people with disabilities has been a slow process. The laws still discriminate against people with disabilities, often people with mental disabilities, in education, voting, and the provision of benefits and licenses. The vulnerability of visually impaired people in Colombia is more evident due to the lack of opportunities and access to education. \n There are many mobile learning applications with accessibility features for visually impaired people. However, no applications are focusing on English learning for all ages from a basic level. We consider this a high priority to close the gap for those students with visual impairments.'}
            />
            <Section
                title={'Description'}
                text={'There is a need to adapt educational and instructional materials to visually impaired students because they do not receive the educational benefit of the "hands-on" courses, nor are they on equal footing with their sighted peers without special adaptive tools and techniques (Supalo et al., 2007). The general impression of virtual courses is that they are designed for sighted learners. \n Therefore, this project seeks to decrease the gap between sighted and visually impaired english students through the use of accessibility tools.'}
            />
            <Section
                title={'Objectives'}
                text={'The main objective is to raise awareness towards the inclusion of people with low vision and blindness in English learning by designing and implementing an accessible and inclusive mobile application for a Colombian public school. \n The specific objectives are the following: \n + Design an accessible, inclusive English learning mobile application \n + Implement the software components of an inclusive English learning mobile application \n + Integrate teachers and students in the creation of authentic content for the mobile application and new \n + Evaluate the impact of the developed mobile applications'}
            />
            <Section
                title={'Outreach'}
                text={'The idea is to take the finished applications to the foundation and test it with a larger group of visually impaired people. The foundation will then be the recipient of the mobile applications that undergraduate and high school students will develop as part of the first year of this project. As part of the pilot test, applications will reach the initial school. After an expected refinement phase of the process, we hope that the organization will extend the use of the applications to more schools.'}
            />
            <Section
                title={'Impact'}
                text={'We will develop the project with the Institución Educativa Distrital La Magdalena (INSEDMAG) in Barranquilla, Colombia. The school has a history of helping students with disabilities, in specific students with visual disabilities. This previous experience would facilitate the implementation of our project, as the existing managing staff has already implemented some educational tools. The school serves about 1600 students. From those, we will work with people with visual disabilities, which amounts to about 20 students. We will also work with students without disabilities who will help design and implement new mobile applications based on the original application designed by students at Universidad del Norte. The INSEDMAG serves a population from different economic backgrounds from a balanced distribution of male and female students. The age group of students with disabilities ranges between 6 and 16, and the students who will help develop new applications are from high school, going between 13 and 16 years old.'}
            />
        </div>
    )
}

export default SocialImpact