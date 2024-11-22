import React from 'react'
import twitter from '../assets/twitter.svg'
import buybtn2 from '../assets/buybtn2.svg'
import telegram from '../assets/telegram.svg'
import communitydog from '../assets/communitydog.svg'
import join from '../assets/join.svg'
import cloudleft from '../assets/cloudleft.svg'
import dexscreenerbtn from '../assets/dexscreenerbtn.svg';

function Community() {
    return (
        <div id='community' className='flex flex-col items-center justify-center relative p-4'>
            <img src={cloudleft} alt="" className='absolute -top-44 -left-20 -z-10' />
            <div className='bg-[#FFD401] flex flex-col justify-center items-start rounded-xl lg:rounded-2xl my-10  lg:w-11/12 lg:p-4d  overflow-clip.  border-black border-2 p-4 lg:p-24 relative'>
                <img src={join} alt="" className='' />
                <img src={communitydog} alt="" className='lg:absolute right-0 -bottom-5 w-96 my-5' />
                <div className="btn flex flex-colf lg:flex-row justify-center items-center">
                    <a href="https://raydium.io/swap/?outputMint=7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump&inputMint=sol" target="_blank" rel="noopener noreferrer"><img src={buybtn2} alt="" className='lg:m-4 m-1' /></a>
                    <a href="https://t.me/AwifSolPortal" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="" className='lg:m-4 m-1 w-12' /></a>
                    <a href="https://x.com/angelwifsols" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" className='lg:m-4 m-1 w-12' /></a>
                    <a href="https://dexscreener.com/solana/7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump" target="_blank" rel="noopener noreferrer"><img src={dexscreenerbtn} alt="" className='lg:m-4 m-1 w-12' /></a>


                </div>
            </div>
        </div>
    )
}

export default Community