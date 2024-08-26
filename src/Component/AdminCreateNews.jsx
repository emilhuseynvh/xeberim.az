import React, { useState } from 'react'
import { useCreateNewsMutation, useGetAllCategoriesQuery } from '../redux/oxuaz.api';
import toast from 'react-hot-toast';



function AdminCreateNews() {
    const [img, setImg] = useState('null')
    const [title, setTitle] = useState('null')
    const [description, setDescription] = useState('null')
    const [categoryId, setCategoryId] = useState('null')

    const token = localStorage.getItem('token')

    const { data: getAllCategories } = useGetAllCategoriesQuery()

    const [createNews, { data, error }] = useCreateNewsMutation()
    data && toast.success('Xəbər uğurla yaradıldı')
    error && toast.error('Xəbər yaradılmadı')
    
    
    function handleSubmit(e) {
        e.preventDefault()
        
        createNews({ img: img, title: title, description: description, category_id: categoryId, token: token })
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-32">
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setImg(e.target.value)} type="Url of image" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Url of image</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setTitle(e.target.value)} type="title" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <textarea onChange={(e) => setDescription(e.target.value)} type="title" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select onChange={(e) => setCategoryId(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option>Category</option>
                {getAllCategories?.map((item, i) => {
                    return <option key={i} value={item._id}>{item.name}</option>
                })}
            </select>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 mt-7 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yaratmaq Allaha məxsusdur</button>
        </form>
    )
}

export default AdminCreateNews