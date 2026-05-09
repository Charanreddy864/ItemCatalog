import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data.json'
import fallBackImage from '../utils/images/fallBackImage.jpeg'

export default function ItemDetails() {
    const { name } = useParams()
    const navigate = useNavigate()
    const [imgLoaded, setImgLoaded] = useState(false)

    const item = data.find(i => i.itemname === name)

    if (!item) return <p>Item not found.</p>

    return (
        <div className="item-details">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
            <div className="img-wrapper img-wrapper--details">
                {!imgLoaded && <div className="img-spinner img-spinner--details" />}
                <img
                    src={item.image}
                    alt={item.itemname}
                    onLoad={() => setImgLoaded(true)}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallBackImage; setImgLoaded(true) }}
                    style={{ opacity: imgLoaded ? 1 : 0 }}
                />
            </div>
            <div className="item-details-info">
                <h1>{item.itemname}</h1>
                <p className="item-details-category">{item.category}</p>
                <div className="item-details-props">
                    {item.itemprops.map((prop, i) => (
                        <div className="item-details-prop" key={i}>
                            <span>{prop.label}</span>
                            <span>{prop.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
