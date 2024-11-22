import React from 'react'
import heroimg from '../assets/heroimg.svg'
import herotxt from '../assets/herotxt.svg'
import bannertxt from '../assets/bannertxt.png'

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center' id='home'>
            <img src={herotxt} alt="" className='' />
            <img src={heroimg} alt="" className='w-[1300px] lg:-m-40 -m-10' />
            <img src={bannertxt} alt="" className='w-full -m-10 lg:-m-52' />
        </div>
    )
}

export default Hero