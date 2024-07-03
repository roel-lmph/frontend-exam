import { logoFooter } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <section className="pt-9">
            <footer className='bg-white flex' id='footer'>
                <div className='container flex sm:flex-row justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={logoFooter}
                            alt="LegalMatch Logo"
                            priority
                            width={180}
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={logoFooter}
                            alt="LegalMatch Logo"
                            priority
                            width={180}
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={logoFooter}
                            alt="LegalMatch Logo"
                            priority
                            width={180}
                        />
                    </div>
                </div>
            </footer>
        </section>
    )
}
