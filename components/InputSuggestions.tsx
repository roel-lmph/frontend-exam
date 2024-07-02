import React from 'react'

interface InputSuggestionsProps {
    input: string,
    suggestions: string[]
}

export default function InputSuggestions({ input, suggestions }: InputSuggestionsProps) {

    if (suggestions?.length <= 0) return null;


    return (
        <ul className="input-suggestions">
            {suggestions.map((s, idx) => {
                return <li
                    key={`suggestion-${idx}`}
                    className="suggestion-item cursor-pointer"
                >
                    {s} <a href="/" className='text-[#6c99ff]'>{input}</a>
                </li>
            })}

        </ul>
    )
}
