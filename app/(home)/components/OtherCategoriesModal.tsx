'use client'

import Modal from '@/components/Modal'
import { otherCategories } from '@/dummy-data'
import { useModal } from '@/hooks/useModal'
import React, { useEffect } from 'react'

export default function OtherCategoriesModal() {

    const modalName = 'other-categories'
    const { activeModal } = useModal()
    const isOpen = modalName == activeModal ? true : false

    return (
        <Modal name={modalName} open={isOpen} >
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
