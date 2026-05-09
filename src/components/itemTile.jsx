import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fallBackImage from '../utils/images/fallBackImage.jpeg'

export default function ItemTile({item}){
    const navigate=useNavigate()
    const [imgLoaded, setImgLoaded] = useState(false)

    function handleClick(){
        navigate('/item/' + item.itemname)
    }

    return(
        <div className="item-tile"
            onClick={()=>handleClick()}>
            <div className="img-wrapper">
                {!imgLoaded && <div className="img-spinner" />}
                <img
                    src={item.image}
                    alt={item.itemname}
                    onLoad={() => setImgLoaded(true)}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallBackImage; setImgLoaded(true) }}
                    style={{ opacity: imgLoaded ? 1 : 0 }}
                />
            </div>
            <p className="item-tile-name">{item.itemname}</p>
        </div>
    )
    

}