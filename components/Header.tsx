import Image from 'next/image'
import React from 'react'

import logo from '../public/logo.png'
import topRightImage from '../public/top-right-image.jpg'

export default function Header() {
    return (
        <header className='bg-white flex' id='header'>
            <div className='container flex sm:flex-row justify-between items-center'>
                <div className='flex items-end'>
                    <Image
                        src={logo}
                        alt="LegalMatch Logo"
                        priority
                    />
                    <div className='text-[#012666] uppercase pb-2 font-semibold'>
                        Find The Right Lawyer
                    </div>
                </div>
                <div>
                    <Image
                        src={topRightImage}
                        alt="LegalMatch features"
                        priority
                    />
                </div>
            </div>
        </header>
    )
}
