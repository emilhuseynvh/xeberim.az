import React, { useState } from 'react'
import { useDeleteNewsMutation, useGetAllNewsQuery } from '../redux/oxuaz.api';
import Card from './Card';
import Swal from 'sweetalert2';

function AdminDeleteNews() {

    const [adminSearch, setAdminSearch] = useState(null)

    const {data: allNews} = useGetAllNewsQuery()

    const [deleteNewsSearch] = useDeleteNewsMutation()
    function handleClick(e) {
        e.preventDefault()
            Swal.fire({
              title: "Are you sure?",
              text: "Are you sure you want to delete this news?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                deleteNewsSearch({id: adminSearch}).then(() => {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your news item has been deleted.",
                    icon: "success"
                  }).then(() => location.reload());
                }).catch((error) => {
                  Swal.fire({
                    title: "Error!",
                    text: "There was an issue deleting the news item.",
                    icon: "error"
                  });
                });
              }
            });
    }
    
    

    return (
        <div className='mx-auto container'>
            <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(e) => setAdminSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required />
                    <button onClick={(e) => handleClick(e)} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className='flex flex-wrap gap-6 my-16 mx-auto'>
                {allNews && allNews.map((item, i) => {
                    return (
                        <Card key={i} item={item} admin={true} id={item._id} />
                    )
                })}
            </div>


        </div>
    )
}

export default AdminDeleteNews