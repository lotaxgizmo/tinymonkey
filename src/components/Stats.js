import React from 'react'
import statsimg from '../assets/statsimg.svg'
import keystats from '../assets/keystats.svg'
import cloudright from '../assets/cloudright.svg'

function Stats() {
    return (
        <div id='stats' className='flex flex-col lg:flex-row items-center justify-between relative px-4 lg:px-24  my-40'>
            <img src={statsimg} alt="" className='m-3' />
            <img src={keystats} alt="" className='m-3' />
            <img src={cloudright} alt="" className='absolute -top-44 -right-20 -z-10' />
        </div>
    )
}

export default Stats