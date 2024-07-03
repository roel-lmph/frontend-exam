'use client'

import Modal from '@/components/Modal'
import NumberBadge from '@/components/NumberBadge'
import Button from '@/components/forms/Button'
import Checkbox from '@/components/forms/Checkbox'
import { subCategories } from '@/dummy-data'
import { useModal } from '@/hooks/useModal'
import React, { useEffect } from 'react'

interface SubCategorySelectionModalProps {
    category: string
}

export default function SubCategorySelectionModal({ category = 'Family Law' }: SubCategorySelectionModalProps) {

    const modalName = 'sub-categories'
    const { activeModal } = useModal()
    const isOpen = modalName == activeModal ? true : false

    return (
        <Modal name={modalName} open={isOpen}>
            <div className='flex flex-col space-y-8 max-w-[600px] py-10'>
                <div className='flex items-center gap-x-4'>
                    <div>
                        <NumberBadge num={3} />
                    </div>
                    <div>
                        Which <b>{category}</b> issue apply to your case?
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {subCategories.map(subCat => {
                        return (<div key={subCat} className='mb-4 w-1/2'><Checkbox
                            key={subCat}
                            label={subCat}
                        /></div>)
                    })}
                </div>

                <div className='text-center'>
                    <Button>Find A Lawyer Now</Button>
                </div>
            </div>

        </Modal>
    )
}
