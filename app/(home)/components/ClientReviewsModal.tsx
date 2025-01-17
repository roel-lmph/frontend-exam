'use client'

import Modal from '@/components/Modal'
import React from 'react'
import Image from "next/image";
import { ratings, reviews } from '@/dummy-data';
import { fiveStars } from '../../assets';
import RatingItem from '@/components/RatingItem';
import { useModal } from '@/hooks/useModal';

export default function ClientReviewsModal() {

    const review = reviews[2]

    const modalName = 'client-reviews'
    const { activeModal } = useModal()
    const isOpen = modalName == activeModal ? true : false

    return (
        <Modal name={modalName} open={isOpen} title='CLIENT REVIEWS' showFooterClose={true}>
            <div className='review'>
                <div className='flex'>

                    <div className="text-nowrap flex flex-col items-center min-w-32">
                        <span className="text-center"><Image
                            src={review.avatar}
                            alt={`${review.name}`}
                            priority
                        /></span>

                    </div>
                    <div>
                        <h3 className='font-bold'>{review.name}</h3>
                        <span className='text-gray-600'>{review.address}</span>
                        <p className='font-bold'>{review.category}</p>
                    </div>
                </div>

                <div className='flex items-center mt-2 mb-1'>
                    <h1 className='font-semibold'>Rating <small>(29 users)</small></h1>
                    <div className='ml-2'>
                        <Image
                            src={fiveStars}
                            alt="Five Stars"
                            priority
                        />
                    </div>
                </div>
                <hr className='py-2' />
                <RatingItem title={<b>Overall</b>} rating={5} />
                {ratings.map(rating => {
                    return (
                        <RatingItem key={rating.title} {...rating} />
                    )
                })}
                <hr className='py-2' />

                <div className='flex items-center space-x-2 pt-2 pb-1'>
                    <Image
                        src={fiveStars}
                        alt="Five Stars"
                        priority
                    />
                    <div className='font-semibold'>
                        by Dexter Marchal, 06/10/2016
                    </div>
                </div>
                <p className='font-light'>
                    <small>Deb did a great job. Got my bench warrant set aside... was sure I was going to jail ... phew.
                        Judge seemed to respect her and I got what I</small></p>
            </div>

        </Modal>
    )
}
