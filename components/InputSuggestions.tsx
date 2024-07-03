import React from 'react'

interface InputSuggestionsProps {
    input: string,
    suggestions: string[],
    onClick?: (val: string) => void
}

export default function InputSuggestions({ input, suggestions, onClick }: InputSuggestionsProps) {

    if (suggestions?.length <= 0) return null;

    return (
        <ul className="input-suggestions">
            {suggestions.map((s, idx) => {
                const suggestionFullText = `${s} ${input}`
                return <li
                    key={`suggestion-${idx}`}
                    className="suggestion-item cursor-pointer"
                    onClick={() => onClick?.(suggestionFullText)}
                >
                    {s} <a href="/" className='text-[#6c99ff]'>{input}</a>
                </li>
            })}

        </ul>
    )
}
