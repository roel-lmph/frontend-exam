import React from 'react';
import NumberBadge from '@/components/NumberBadge';
import Image from 'next/image'
import dropdownIcon from '../public/dropdown-arrow-icon.png'

export default function CategorySelect() {
    return (
        <div className="relative">
            <div >
                Choose a category:
            </div>
            <div className="relative mt-2 rounded-full h-14">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <NumberBadge num={1} />
                </div>
                <select
                    id="category"
                    name="category"
                    className="block appearance-none w-full h-full bg-white border border-gray-300 rounded-full py-3 pl-14 text-gray-400 placeholder:text-gray-400 pr-8 focus:outline-none focus:bg-white focus:border-indigo-600 sm:text-sm"
                    defaultValue=""
                >
                    <option value="" disabled hidden>Click to choose a legal category</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
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
    );
}
