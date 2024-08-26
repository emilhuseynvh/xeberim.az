import React from 'react'
import { useLocation } from 'react-router-dom'

function Item() {

    const location = useLocation()
    const data = location.state?.someData
    const { img, title, updatedAt, description } = data



    return (
        <div className='my-16 ml-0 lg:ml-28 w-full lg:w-1/2'>
            <div className="container mx-auto">
                <img className='w-full my-4' src={img} />
                <h3 className='text-2xl font-semibold mb-6'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Item