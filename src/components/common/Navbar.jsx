import { useState } from 'react'

function Navbar() {
    const [projects, setProjects] = useState(false)
    const [Project, setProject] = useState(1)

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li
                    onMouseEnter={
                        () => setProjects(true)
                    }
                    onMouseLeave={
                        () => setProjects(false)
                    }
                >
                    <a>Projects</a>
                    {
                        projects && (
                            <div className='card drop-down-projects'>
                                <div>
                                    <div
                                        onMouseEnter={
                                            () => setProject(1)
                                        }
                                    >
                                        <a href="/projects/1" className='text-primaryPlayLearn'>Play&Learn</a>
                                        <p>
                                            First project focused on teaching English to visually impaired people
                                        </p>
                                    </div>
                                    <div
                                        onMouseEnter={
                                            () => setProject(2)
                                        }
                                    >
                                        <a href="/projects/2" className='text-primaryEyeland'>eyeland</a>
                                        <p>
                                            Second project focused on teaching English to visually impaired people and team work
                                        </p>
                                    </div>
                                </div>
                                <div className='h-20 w-1 bg-black opacity-50'>
                                    {/* Separator */}
                                </div>
                                <div className='w-60'>
                                    {
                                        Project === 1 ? (
                                            <img src="./PlayLearnLogo.svg" alt="" />
                                        ) : (
                                            <img src="./eyelandLogo.svg" alt="" />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </li>
                <li>
                    <a href="/team">Our Team</a>
                </li>
                <li>
                    <a href="/socialimpact">Social Impact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar