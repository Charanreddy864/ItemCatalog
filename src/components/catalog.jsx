import React from 'react'
import ItemTile from './itemTile'

export default function Catalog({data,filter}){

    return(
        <div className="catalog">
            {data.map((item,index)=>(
                ( (filter === 'All' || item.category === filter) &&
                <ItemTile key={index} item={item} />
                )
            ))}
        </div>
    )

}