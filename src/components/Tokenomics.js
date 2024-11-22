import React from 'react'
import tokeno from '../assets/tokeno.svg'
import tokeno1 from '../assets/tokeno1.svg'
import tokeno2 from '../assets/tokeno2.svg'
import tokeno3 from '../assets/tokeno3.svg'
import angenotxt from '../assets/angenotxt.svg'

function Tokenomics() {
    return (
        <div id='agenomics' className='flex flex-col items-center justify-center relative'>
            <img src={angenotxt} alt="" />

            <p className='text-xl text-center mb-10'>PRAESENT TEMPOR ORNARE CONVALLIS. ETIAM SCELERISQUE IPSUM UT DUI VENENATIS</p>
            <div className="four flex justify-center items-center flex-col lg:flex-row ">
                <img src={tokeno} alt="" className='p-4' />
                <img src={tokeno1} alt="" className='p-4' />
                <img src={tokeno2} alt="" className='p-4' />
                <img src={tokeno3} alt="" className='p-4' />
            </div>
        </div>
    )
}

export default Tokenomics