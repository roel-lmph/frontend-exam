import { ARated, TrustSeal, logoFooter } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <section className="py-12">
                <div className="mx-auto container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="items-center">
                                <Image
                                    src={logoFooter}
                                    alt="Legal Match"
                                    priority
                                />
                            </div>
                        </div>
                        <div
                            className="col-span-12 md:col-span-6 lg:col-span-7 text-center footer-text"
                        >
                            <div className="flex justify-center items-center">
                                <div className="flex space-x-4 pb-5 text-gray-900">
                                    <div className="p-2"><a href="#">User Agreement</a></div>
                                    <div className="dot"><span>&#x25CF;</span></div>
                                    <div className="p-2"><a href="#">Privacy Policy</a></div>
                                    <div className="dot"><span>&#x25CF;</span></div>
                                    <div className="p-2"><a href="#">Site Map</a></div>
                                </div>
                            </div>
                            <p><small className="text-gray-900">
                                Copyright 1999-2016 LegalMatch. All rights reserved. LegalMatch®,
                                <br />
                                the LegalMatch logo, and the tradedress are trademarks of
                                LegalMatch. Patents Pending.
                            </small>
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-2 float-right">
                            <div className="items-right">
                                <div className="footer-image">
                                    <button type="button" className="flex items-center py-1">
                                        <Image
                                            src={TrustSeal}
                                            alt="Trust Seal"
                                            className='footer-img'
                                            priority
                                        />
                                    </button>
                                    <button type="button" className="flex items-center">
                                        <Image
                                            src={ARated}
                                            alt="ARated"
                                            priority
                                            className='footer-img'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
