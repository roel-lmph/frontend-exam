'use client'

import Modal from '@/components/Modal'
import { otherCategories } from '@/dummy-data'
import React from 'react'

export default function OtherCategoriesModal() {


    return (
        <Modal open={true} >
            <div className=''>
                <div className='title'>
                    OTHER CATEGORIES
                </div>
                <div className='text-sm'>
                    Choose the category that best fits your case
                </div>
            </div>
            <div className='pt-4 flex flex-wrap'>
                {otherCategories.map(cat => {
                    return (<div key={cat} className=' w-1/2'>
                        <span className='text-primary text-sm'>
                            {cat}
                        </span>
                    </div>)
                })}
                {otherCategories.reverse().map(cat => {
                    return (<div key={cat} className=' w-1/2'>
                        <span className='text-primary text-sm'>
                            {cat}
                        </span>
                    </div>)
                })}
            </div>

        </Modal>
    )
}
