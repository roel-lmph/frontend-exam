import React from 'react'

interface NumberBadgeProps {
    num: number
}
export default function NumberBadge({ num }: NumberBadgeProps) {
    return (
        <span className='circle-badge'>{num}</span>
    )
}