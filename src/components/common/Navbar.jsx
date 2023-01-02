import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [projects, setProjects] = useState(false)
    const [Project, setProject] = useState(1)

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
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
                                        <a href="https://proyecto-final-epics.github.io/PlayAndLearnWebPage/" className='text-primaryPlayLearn'>Play&Learn</a>
                                        <p>
                                            First project focused on teaching English to visually impaired people
                                        </p>
                                    </div>
                                    <div
                                        onMouseEnter={
                                            () => setProject(2)
                                        }
                                    >
                                        <a href="https://proyecto-final-epics.github.io/EyeLand/" className='text-primaryEyeland'>eyeland</a>
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
                    <Link to="/team">Our Team</Link>
                </li>
                <li>
                    <Link to="/socialimpact">Social Impact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar