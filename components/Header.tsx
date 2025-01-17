import Image from 'next/image'
import React from 'react'

import { logoHeader, topRightImage } from '@/app/assets'

export default function Header() {
    const subTitle = 'FIND THE RIGHT LAWYER'
    return (
        <header className='bg-white flex' id='header'>
            <div className='container flex sm:flex-row justify-between items-center'>
                <div className='flex items-end'>
                    <a href='/' title={'LegalMatch - ' + subTitle}>
                        <Image
                            src={logoHeader}
                            alt="LegalMatch Logo"
                            priority
                            className='header-logo'

                        />
                    </a>
                    <div className='text-[#012666]  pb-2 font-semibold'>
                        {subTitle}
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
