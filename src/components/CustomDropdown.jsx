import React, { useState, useRef, useEffect } from 'react'

export default function CustomDropdown({ value, options, onChange }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="custom-dropdown" ref={ref}>
            <button
                className="custom-dropdown-trigger"
                onClick={() => setOpen(prev => !prev)}
            >
                <span>{value}</span>
                <svg
                    className={`custom-dropdown-arrow ${open ? 'open' : ''}`}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            {open && (
                <ul className="custom-dropdown-menu">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`custom-dropdown-item ${option === value ? 'active' : ''}`}
                            onClick={() => { onChange(option); setOpen(false) }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
