import React from 'react'

function Hero() {
    return (
        <div className='hero'>
            <div className='w-1/3 flex flex-col gap-5'>
                <h2>
                    INCREASING INCLUSION OF VISUALLY IMPAIRED PEOPLE WITH A MOBILE APPLICATION FOR ENGLISH LEARNING
                </h2>
                <div className='flex gap-5'>
                    <a href="https://github.com/Proyecto-Final-EPICS" className='button bg-black text-white'>
                        <img src="/GitHub.svg" alt="" className='w-12' />
                        <p>
                            GitHub
                        </p>
                    </a>
                    <a href="" className='button border border-black'>
                        <img src="./EpicsIEEE.png" alt="" />
                    </a>
                </div>
            </div>
            <div className='flex'>
                <img src="./eyeLandHero.svg" alt="" className='w-64' />
                <img src="./playLearnHero.svg" alt="" className='w-64 relative -left-10 -bottom-16' />
            </div>
        </div>
    )
}

export default Hero