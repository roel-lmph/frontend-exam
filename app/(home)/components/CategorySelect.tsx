'use client'

import React, { useState } from 'react';
import NumberBadge from '@/components/NumberBadge';
import Image from 'next/image'
import SubCategorySelectionModal from './SubCategorySelectionModal';
import { categories } from '@/dummy-data';
import { useModal } from '@/hooks/useModal';
import { dropdownIcon } from '@/app/assets';



export default function CategorySelect() {


    const { setActiveModal } = useModal()
    const [category, setCategory] = useState('')


    const handleSelectCategory = (e: { target: { value: string; }; }) => {
        const val = e.target.value
        setCategory(val)
        setActiveModal('sub-categories')
    }


    return (
        <>
            <div className="relative">
                <div >
                    Choose a category:
                </div>
                <div className="relative mt-2 rounded-full h-14">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <NumberBadge num={2} />
                    </div>
                    <select
                        id="category"
                        name="category"
                        title='Category'
                        className="dropdown-select block appearance-none w-full h-full bg-white border border-gray-300 rounded-full py-3 pl-14 text-gray-400 placeholder:text-gray-400 pr-8 focus:outline-none focus:bg-white focus:border-indigo-600 sm:text-sm"
                        defaultValue={category}
                        onChange={handleSelectCategory}
                    >
                        <option value="" disabled hidden>Click to choose a legal category</option>
                        {categories.map(cat => <option key={cat} className='px-2' value={cat}>{cat}</option>)}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Image
                            src={dropdownIcon}
                            alt="Category Select"
                            priority
                            className='opacity-50'
                        />
                    </div>
                </div>
            </div>
            <SubCategorySelectionModal category={category} />
        </>
    );
}
