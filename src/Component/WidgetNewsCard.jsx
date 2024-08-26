import React from 'react'
import { useNavigate } from 'react-router-dom'

function WidgetNewsCard({ item }) {

  const navigate = useNavigate()

  const { img, title } = item

  return (
    <div onClick={() => navigate(`item/?${title}`, { state: { someData: item } })} className='flex items-start gap-3 cursor-pointer hover:text-red_'>
      <img className='w-40 mb-7' src={img} />
      <p className='cursor-pointer '>{title}</p>
    </div>
  )
}

export default WidgetNewsCard