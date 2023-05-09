import React from "react";
import reactLogo from './../assets/react.svg'
import viteLogo from './../assets/vite.svg'
import tailwindLogo from './../assets/tailwindcss.webp'

const Footer = () => {
    return (
        <>
            <div className='py-4 bg-white shadow-lg w-full flex justify-center gap-4'>
                <figure className='w-6'>
                    <img src={reactLogo} alt='img1'></img>
                </figure>
                <figure className='w-6'>
                    <img src={viteLogo} alt='img1'></img>
                </figure>
                <figure className='w-6'>
                    <img src={tailwindLogo} alt='img1'></img>
                </figure>
            </div>
        </>
    )
}

export default Footer;