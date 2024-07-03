'use client'

import React, { useRef, useState } from 'react';
import NumberBadge from '@/components/NumberBadge';
import Image from 'next/image'
import SubCategorySelectionModal from './SubCategorySelectionModal';
import { categories } from '@/dummy-data';
import { useModal } from '@/hooks/useModal';
import { dropdownIcon } from '@/app/assets';
import { useOnClickOutside } from 'usehooks-ts';



export default function CategorySelect() {
    const ref = useRef(null)


    const { setActiveModal } = useModal()
    const [category, setCategory] = useState('Click to choose a legal category')


    const handleSelectCategory = (e: { target: { value: string; }; }) => {
        const val = e.target.value
        setCategory(val)
        setActiveModal('sub-categories')
    }

    const handleSelectClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        return false
    }


    const preventDefault = (event: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
        event.preventDefault();
    };

    const [showDropdown, setShowDropdown] = useState(false)
    const handleSelect = (value: string) => {
        setCategory(value)
        setActiveModal('sub-categories')
        setShowDropdown(false)
    }

    const handleClickOutside = () => {
        setShowDropdown(false)
    }

    useOnClickOutside(ref, handleClickOutside)

    return (
        <>
            <div className="relative">
                <div >
                    Choose a category:
                </div>
                <div className="relative mt-2 rounded-full h-14"
                    onClick={() => setShowDropdown(true)} >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <NumberBadge num={2} />
                    </div>
                    {/* <select
                        id="category"
                        name="category"
                        title='Category'
                        className="dropdown-select block appearance-none w-full h-full bg-white border border-gray-300 rounded-full py-3 pl-14 text-gray-400 placeholder:text-gray-400 pr-8 focus:outline-none focus:bg-white focus:border-indigo-600 sm:text-sm"
                        defaultValue={category}
                        onChange={handleSelectCategory}
                        onClick={preventDefault}
                        style={{ visibility: 'hidden' }}
                    >
                        <option value="" disabled hidden>Click to choose a legal category</option>
                        {categories.map(cat => <option key={cat} className='px-2' value={cat}>{cat}</option>)}
                    </select> */}
                    <span className="pt-[18px] dropdown-select block appearance-none w-full h-full bg-white border border-gray-300 rounded-full py-3 pl-14 text-gray-400 placeholder:text-gray-400 pr-8 focus:outline-none focus:bg-white focus:border-indigo-600 sm:text-sm">
                        {category}
                    </span>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Image
                            src={dropdownIcon}
                            alt="Category Select"
                            priority
                            className='opacity-50'
                        />
                    </div>
                </div>
                {showDropdown && (
                    <div ref={ref} id="dropdown" className="absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow text-gray-400 mt-1">
                        <ul className="py-2 text-sm " >
                            {categories.map(cat => {
                                return <li key={cat} onClick={() => handleSelect(cat)}>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#bcd3e3] hover:text-black">{cat}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                )}

            </div>
            <SubCategorySelectionModal category={category} />
        </>
    );
}
