import React, { ReactNode } from 'react'

import Image from "next/image";

import avatar1 from '../public/avatar1.png'
import fiveStars from '../public/5stars.png'
import reviewIcon from '../public/review-icon.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ClientReviewProps {
    avatar: StaticImport
    name: ReactNode | string
    address: ReactNode | string
    reviewText: string
    category: string
}

export default function ClientReview(props: ClientReviewProps) {
    return (
        <>
            <div className="flex gap-4 items-start">

                <div className="text-nowrap flex flex-col items-center">
                    <span className="text-center"><Image
                        src={props.avatar}
                        alt={`${props.name}`}
                        priority
                    /></span>
                    <p>{props.name}</p>
                    <span>Ch{props.address}</span>
                </div>
                <div>
                    <div className="flex space-x-4 items-center">
                        <span className="font-semibold">
                            {props.category}
                        </span>
                        <div>
                            <Image
                                src={fiveStars}
                                alt="Five Stars"
                                priority
                            />
                        </div>
                    </div>
                    <p className="italic font-gothamLight text-sm">
                        "This lawyer exceeds my expectations. I found Attorney Mullen to be very reliable, courteous and prompt..."
                    </p>
                    <a href="/" className="flex float-right font-gothamLight text-xs text-[#d89108]">
                        Read Review <Image
                            src={reviewIcon}
                            alt="Review"
                            className="ml-1"
                            priority
                        /></a>
                </div>

            </div>
            <hr className='my-4' />
        </>
    )
}
