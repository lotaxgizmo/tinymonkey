import React from 'react'
import whattxt from '../assets/whattxt.png'
import whattxtmobile from '../assets/whattxtmobile.svg'
import buybtn from '../assets/buybtn.svg'
import leftdog from '../assets/leftdog.svg'
import cloudleft from '../assets/cloudleft.svg'
import wing1 from '../assets/wing1.svg'

function About() {
    return (
        <div id='about' className='flex flex-col justify-center items-center lg:p-5d my-10 p-4 relative mt-40'>
            <img src={cloudleft} alt="" className='absolute -top-44 left-0 -z-10' />
            <img src={wing1} alt="" className='absolute -top-0 -right-0 -z-10' />
            <div className='bg-[#FFD401] flex flex-col justify-center items-center rounded-xl lg:rounded-[160px] lg:w-10/12 lg:p-4d  overflow-clip  border-black border-4'>
                <img src={whattxtmobile} alt="" className='flex lg:hidden w-64 mt-5' />
                <img src={whattxt} alt="" className='lg:flex hidden w-[760px] lg:-mb-20 -ml-52' />
                <div className="divide flex flex-col lg:flex-row">
                    <div className="left lg:w-6/12 flex items-end ">
                        <img src={leftdog} alt="" />

                    </div>
                    <div className="right lg:w-6/12 flex flex-col justify-center items-start p-4 lg:p-10">
                        <p className='text-lg lg:text-xl'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. PRAESENT TEMPOR ORNARE CONVALLIS. ETIAM SCELERISQUE IPSUM UT DUI VENENATIS VENENATIS. SUSPENDISSE POTENTI. PROIN AT AUCTOR LECTUS. DONEC UT ULLAMCORPER ERAT. SED DIGNISSIM LIGULA ELIT, IN RHONCUS ARCU CONVALLIS AC. MAURIS NISI NEQUE, VESTIBULUM TRISTIQUE FACILISIS QUIS, ULTRICES QUIS LEO</p>
                        <a href="https://raydium.io/swap/?outputMint=7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump&inputMint=sol" target="_blank" rel="noopener noreferrer"><img src={buybtn} alt="" className='my-7' /></a>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About