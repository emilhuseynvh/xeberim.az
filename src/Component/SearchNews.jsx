import React, { useState } from 'react'
import { useSearchNewsQuery } from '../redux/oxuaz.api';
import { useNavigate } from 'react-router-dom';

function SearchNews() {


    const [search, setSearch] = useState(null)
    console.log(search);

    const { data: searchNews } = useSearchNewsQuery(search)

    const navigate = useNavigate()


    return (
        <div>
            <form className="max-w-md mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Enter the name of news" required />
                    <div className={`absolute rounded-lg ${searchNews && searchNews.length * 56 > 256 ? 'overflow-y-scroll' : ''}`} style={{ height: '16rem' }}>
                        {searchNews && searchNews.map((item, i) => (<div  onClick={() => navigate(`item/?${item.title}`, { state: { someData: item } })}  key={i} className='bg-gray-50 p-4 border-b-2 cursor-pointer'>
                            <h1 key={i} className='text-md font-semibold'>{item.title}</h1>
                        </div>))}
                    </div>
                </div>
            </form>

        </div>
    )
}

export default SearchNews