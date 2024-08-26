import React, { useState } from 'react'
import { useCreateCategoryMutation } from '../redux/oxuaz.api';
import toast from 'react-hot-toast';
import AdminAllCategories from './AdminAllCategories';

function AdminCreateCategories() {

    const [categoryName, setCategoryName] = useState('')

    const [createCategory] = useCreateCategoryMutation()

    function handleClick(e) {
            e.preventDefault()
            createCategory({ name: categoryName }).then(() => {
            toast.success('Categories created successfully')
        })
    }

    return (
        <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <input onChange={(e) => setCategoryName(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Create Category" required />
                <button onClick={(e) => handleClick(e)} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </div>
        </form>
    )
}

export default AdminCreateCategories