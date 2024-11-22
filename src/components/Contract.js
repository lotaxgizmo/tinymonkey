import React from 'react';
import dexscreener from '../assets/dexscreener.svg';
import dexscreenerbtn from '../assets/dexscreenerbtn.svg';
import cloudright from '../assets/cloudright.svg';
import copybtn from '../assets/copybtn.svg';
import contractasd from '../assets/contractasd.svg';
import caaa from '../assets/caaa.svg';

function Contract() {
    const copyTextToClipboard = () => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = '58WKuKzAH6A5QHdBAT8n2QHiFtzXcPXBEEXB785Ppump'; // Replace with your actual text to copy
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px'; // Move outside the screen to make it invisible
        document.body.appendChild(textarea);

        // Select and copy the text inside the textarea
        textarea.select();
        document.execCommand('copy');

        // Clean up - remove the textarea
        document.body.removeChild(textarea);
    };

    return (
        <div id='community' className='flex flex-col items-center justify-center relative p-4 mt-32'>
            <img src={cloudright} alt="" className='absolute -top-44 -right-20 -z-10' />
            <div className='bg-[#FFD401] flex flex-col justify-center items-center rounded-xl lg:rounded-3xl my-10 w-11/12  lg:w-9/12 lg:p-4d  overflow-clip.  border-black border-2 p-4 lg:p-24 relative'>
                <img src={contractasd} alt="" />

                <div className="relative  lg:w-auto w-11/12 copy flex flex-col lg:flex-row justify-center items-center text-wrap ">
                    {/* <img src={caaa} alt="" /> */}
                    <p className='text-sm lg:text-3xl break-words text-center lg:w-auto w-11/12'>58WKuKzAH6A5QHdBAT8n2QHiFtzXcPXBEEXB785Ppump</p>
                    {/* <p className='break-words overflow-wrap text-sm lg:text-3xl text-wrap text-center  '>7xEdKtj6nX2nvqPGayLi4egSWwr53NYSaVZQLRLapump</p> */}
                    <img
                        src={copybtn}
                        alt=""
                        className='m-2 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95'
                        onClick={copyTextToClipboard}
                    />
                </div>
            </div>
        </div>
    );
}

export default Contract;
