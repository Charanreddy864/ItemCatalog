import React from 'react'
import CustomDropdown from './CustomDropdown'


export default function Filters({setFilter, filter, categories}){

    return(
        <div className="filters">
            {/* Custom dropdown for small screens */}
            <div className="filter-dropdown-wrapper">
                <CustomDropdown
                    value={filter}
                    options={categories}
                    onChange={setFilter}
                />
            </div>

            {/* Buttons for large screens */}
            <div className="filter-buttons">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${category === filter ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}