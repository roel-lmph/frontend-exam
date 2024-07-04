import { fiveStars, fourStars } from '@/app/assets'
import React, { ReactNode } from 'react'
import Image from 'next/image'
interface RatingItemProps {
    title: ReactNode | string
    rating: number
}
export default function RatingItem({
    title,
    rating
}: RatingItemProps) {

    const starIcon = rating == 5 ? <Image
        src={fiveStars}
        alt="Five Stars"
        priority
    /> : <Image
        src={fourStars}
        alt="Four Stars"
        priority
    />
    return (
        <div className='flex justify-between items-center mb-2'>
            <p className='text-xs pt-1'>
                {title}
            </p>
            {starIcon}
        </div>
    )
}
