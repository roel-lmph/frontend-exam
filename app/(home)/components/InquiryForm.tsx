'use client'

import { reviews } from '@/dummy-data'
import React from 'react'
import CategorySelect from './CategorySelect'
import ClientReview from './ClientReview'
import ZipCodeInput from './ZipCodeInput'
import { useModal } from '@/hooks/useModal'

export default function InquiryForm() {

    const { setActiveModal } = useModal()
    return (
        <>
            <div className="font-gothamLight text-[41px] inquiry-title">
                Find a Lawyer for your Legal Issue
            </div>
            <div className="text-[29px] inquiry-subtitle">
                Fast, Free and Confidential
            </div>

            <div className="">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        {/* Content for the first column */}
                        <div id="inquiry-form-fields" className="pt-10 sm:pt-14 flex flex-col gap-y-8 w-3/4">
                            <div >
                                <ZipCodeInput />
                            </div>
                            <div>
                                <CategorySelect />
                            </div>
                            <p className="text-center font-gothamBook">
                                Can&apos;t find your category? <span onClick={() => setActiveModal('other-categories')} className="link underline underline-offset-2">Click here.</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        {/* Content for the second column */}
                        <div className="" id="client-reviews">
                            <p className="mb-2 text-2xl">Clients review LegalMatch lawyers</p>
                            {reviews.map((review, i) =>
                                <ClientReview key={`r-${i}`} {...review} />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
