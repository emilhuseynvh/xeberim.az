import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { useGetAllNewsQuery, useGetNewsByCategoryIdQuery } from '../redux/oxuaz.api';

function Category() {
    
    const location = useLocation();
    const state = location.state?.someData;

    const { data: getAllNews } = useGetAllNewsQuery();
    const { data: getNewsByCategoryId } = useGetNewsByCategoryIdQuery(state);

    return (
        <div>
            <div className="mx-auto container">
                <div className="bg-[#fbfbfb] border-l-4 my-9 border-l-red_">
                    
                </div>
                <div className="flex flex-wrap gap-6 my-20">
                    {state === "allCategories" 
                        ? getAllNews?.map((item, i) => (
                            <Card key={i} item={item} />
                          ))
                        : getNewsByCategoryId?.map((item, i) => (
                            <Card key={i} item={item} />
                          ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Category;
