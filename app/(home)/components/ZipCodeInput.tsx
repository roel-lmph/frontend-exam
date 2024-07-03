'use client'

import InputSuggestions from "@/components/InputSuggestions";
import NumberBadge from "@/components/NumberBadge";
import { useState } from "react";

export default function ZipCodeInput() {

    const zipCodes = [
        { id: 1, value: 'Noweheresville, XX', zipCode: '00000' },
    ];

    const renderSuggestions = () => {
        return (
            <ul className="input-suggestions">
                <li
                    key={'suggestion.id'}
                    className="suggestion-item"
                >
                    Nowheresville, XX <a href="/">00000</a>
                </li>
            </ul>
        );
    };
    const [inputVal, setInputVal] = useState<string>('')
    const [suggestions, setSuggestions] = useState<string[]>([])

    const handleOnChange = (e: { target: { value: string; }; }) => {
        const input = e.target.value
        setInputVal(input)
        const matches = zipCodes.filter(zip => zip.zipCode == input)

        setSuggestions(matches?.map(m => m.value))
    }


    return (
        <div>
            <div >
                Enter Zip Code or City:
            </div>
            <div className="relative mt-2 rounded-full h-14">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <NumberBadge num={1} />
                </div>
                <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    className="block rounded-full outline-none border-0 w-full h-full py-3 pl-14 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Does not have to be where you live"
                    autoComplete="off"
                    onChange={handleOnChange}
                />
                <InputSuggestions input={inputVal} suggestions={suggestions} />
            </div>
        </div>
    );
}