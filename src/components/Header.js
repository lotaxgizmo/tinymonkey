import React, { useState } from 'react';
import twitterbtn from '../assets/twitter.svg';
import angelbot from '../assets/angelbot.svg';
import telegrambtn from '../assets/telegram.svg';
import dexscreenerbtn from '../assets/dexscreenerbtn.svg';
import telegram from '../assets/telegram.svg';
import buybtn2 from '../assets/buybtn2.svg';
import openIcon from '../assets/open.svg'; // Add your open SVG icon
import closeIcon from '../assets/close.svg'; // Add your close SVG icon

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='flex lg:flex-row flex-col items-center justify-between relative px-4 lg:px-24 mt-5'>
                <img src={angelbot} alt="" />

                <div className="hidden lg:flex links flex-col lg:flex-row">
                    <a href="#about"><p className='text-2xl mx-4'>ABOUT</p></a>
                    <a href="#agenomics"><p className='text-2xl mx-4'>ANGENOMICS</p></a>
                    <a href="#community"><p className='text-2xl mx-4'>COMMUNITY</p></a>
                </div>

                <div className="btns hidden lg:flex flex-row justify-center items-center">
                    <a href="https://t.me/AwifSolPortal" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="" className='m-3 w-14' /></a>
                    <a href="https://dexscreener.com/solana/7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump" target="_blank" rel="noopener noreferrer"><img src={dexscreenerbtn} alt="" className='m-3 w-14' /></a>
                    <a href="https://x.com/angelwifsols" target="_blank" rel="noopener noreferrer"><img src={twitterbtn} alt="" className='m-3 w-14' /></a>
                    <a href="https://raydium.io/swap/?outputMint=7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump&inputMint=sol" target="_blank" rel="noopener noreferrer"><img src={buybtn2} alt="" className='m-3' /></a>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="p-2">
                        <img src={menuOpen ? closeIcon : openIcon} alt="menu toggle" className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden bg-white flex flex-col items-center">
                    <a href="#about" className='py-2'><p className='text-2xl'>ABOUT</p></a>
                    <a href="#agenomics" className='py-2'><p className='text-2xl'>ANGENOMICS</p></a>
                    <a href="#community" className='py-2'><p className='text-2xl'>COMMUNITY</p></a>
                    <a href="https://t.me/AwifSolPortal" target="_blank" rel="noopener noreferrer" className='py-2'><img src={telegram} alt="" className='w-14' /></a>
                    <a href="https://dexscreener.com/solana/7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump" target="_blank" rel="noopener noreferrer" className='py-2'><img src={dexscreenerbtn} alt="" className='w-14' /></a>
                    <a href="https://x.com/angelwifsols" target="_blank" rel="noopener noreferrer" className='py-2'><img src={twitterbtn} alt="" className='w-14' /></a>
                    <a href="https://raydium.io/swap/?outputMint=7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump&inputMint=sol" target="_blank" rel="noopener noreferrer" className='py-2'><img src={buybtn2} alt="" /></a>
                </div>
            )}
        </>
    );
}

export default Header;
