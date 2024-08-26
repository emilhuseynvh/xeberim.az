import React from 'react'
import { useGetAllNewsQuery } from '../redux/oxuaz.api';
import WidgetNewsCard from './WidgetNewsCard';

function WidgetNews() {

    const { data: allNews, } = useGetAllNewsQuery()

    return (
        <div className=' w-full lg:w-[30%] my-16 lg:my-0'>
            {allNews?.map((item, i) =>i < 5 &&  <WidgetNewsCard key={i} item={item} />)}
        </div>
    )
}

export default WidgetNews