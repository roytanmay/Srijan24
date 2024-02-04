import React from 'react'
import './style.css'
import TextAnimation from './Animation/TextAnimation'
import Countdown from './Countdown/Countdown'
const Hero = () => {
    return (
        <>
            <div className='pb-2 sm:pb-3 lg:pb-4'>
                <div className='mx-auto max-w-screen-2xl px-4 md:px-4'>
                    <section className='flex flex-col items-center'>
                        <div className='flex max-w-xl flex-col items-center pb-1 pt-8 lg:pb-2 lg:pt-32'>
                            <div className='image-container text-center mb-1 md:mb-1'>
                                <img
                                    src='/assets/Subtract.png'
                                    alt=''
                                    className='base-image'
                                />
                                <img
                                    src='/assets/Srijan logo.png'
                                    alt=''
                                    className='overlay-image'
                                />
                                <div className='circle'>
                                    <img
                                        className='lo'
                                        src='/assets/Vector.png'
                                        alt=''
                                        width={173.93}
                                        height={174.09}
                                    />
                                </div>
                            </div>
                            <TextAnimation />
                            <h2 className="mb-6 text-4xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FF0099] to-[#FF7A00] md:text-3xl">21st March-24th March</h2>
                        </div>
                        <Countdown />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Hero
