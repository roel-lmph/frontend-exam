'use client'

import React, { ReactNode } from 'react'

import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useModal } from '@/hooks/useModal';
import { stars, reviewIcon } from '@/app/assets';

interface ClientReviewProps {
    avatar: StaticImport
    name: ReactNode | string
    address: ReactNode | string
    reviewText: string
    category: string
}

export default function ClientReview(props: ClientReviewProps) {

    const { setActiveModal } = useModal()
    return (
        <>
            <div className="flex gap-4 items-start ">
                <div className="text-nowrap flex flex-col items-center min-w-32">
                    <span className="text-center"><Image
                        src={props.avatar}
                        alt={`${props.name}`}
                        priority
                    /></span>
                    <p>{props.name}</p>
                    <span>{props.address}</span>
                </div>
                <div>
                    <div className="flex space-x-4 items-center">
                        <span className="font-semibold">
                            {props.category}
                        </span>
                        <div>
                            <Image
                                src={stars}
                                alt="Five Stars"
                                priority
                            />
                        </div>
                    </div>
                    <p className="italic font-gothamLight text-sm">
                        "{props.reviewText}"
                    </p>
                    <span onClick={() => setActiveModal('client-reviews')} className="flex float-right font-gothamLight text-xs link text-[#d89108]">
                        Read Review <Image
                            src={reviewIcon}
                            alt="Review"
                            className="ml-1"
                            priority
                        />
                    </span>
                </div>

            </div>
            <hr className='my-4 opacity-25' />
        </>
    )
}
