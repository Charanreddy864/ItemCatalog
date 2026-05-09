import React from 'react'


export default function Filters({setFilter, filter, categories}){

    return(
        <div className="filters">
            {
                categories.map((category,index)=>(
                    <button 
                    key={index} 
                    className={`filter-btn ${category === filter ? 'active' : ''}`} 
                    onClick={()=>setFilter(category)}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}