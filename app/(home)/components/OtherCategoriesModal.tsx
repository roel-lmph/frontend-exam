'use client'

import React from 'react'

import Modal from '@/components/Modal'
import { otherCategories } from '@/dummy-data'
import { useModal } from '@/hooks/useModal'

export default function OtherCategoriesModal() {

    const modalName = 'other-categories'
    const { activeModal } = useModal()
    const isOpen = modalName == activeModal ? true : false

    return (
        <Modal name={modalName} open={isOpen} >
            <div className=''>
                <div className='title font-bold'>
                    OTHER CATEGORIES
                </div>
                <div className='text-sm'>
                    Choose the category that best fits your case
                </div>
            </div>
            <div className='pt-4 flex flex-wrap md:text-xs mb-3'>
                {otherCategories.map(cat => {
                    return (<div key={cat} className=' w-1/2'>
                        <span className='text-primary categories'>
                            {cat}
                        </span>
                    </div>)
                })}
                {otherCategories.reverse().map(cat => {
                    return (<div key={cat} className=' w-1/2'>
                        <span className='text-primary categories'>
                            {cat}
                        </span>
                    </div>)
                })}
            </div>

        </Modal>
    )
}
