import Image from 'next/image'
import React from 'react'

import logo from '../public/logo-footer.png'
import topRightImage from '../public/top-right-image.jpg'

export default function Footer() {
    return (
        <footer className='bg-white flex' id='footer'>
            <div className='container flex sm:flex-row justify-between items-center'>
                <div className='flex flex-col items-center'>
                    <Image
                        src={logo}
                        alt="LegalMatch Logo"
                        priority
                        width={180}
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <Image
                        src={logo}
                        alt="LegalMatch Logo"
                        priority
                        width={180}
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <Image
                        src={logo}
                        alt="LegalMatch Logo"
                        priority
                        width={180}
                    />
                </div>
            </div>
        </footer>
    )
}
