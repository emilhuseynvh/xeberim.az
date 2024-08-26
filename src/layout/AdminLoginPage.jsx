import React, { useEffect, useState } from 'react'
import { useLoginMutation } from '../redux/oxuaz.api'
import toast, { Toaster } from 'react-hot-toast'

function AdminLoginPage() {
    const [uname, setUname] = useState('')
    const [pass, setPass] = useState('')

    const [login, { data, error }] = useLoginMutation()

    function send() {
        localStorage.setItem('token', data.token)
        location.href = '/admin/home'
    }

    function handleSubmit(e) {
        e.preventDefault()
        login({ login: uname, password: pass })
    }

    useEffect(() => {
        data && send()
    }, [data])

    useEffect(() => {
        error && toast.error('Invalid username or password')
    }, [error])

    return (
        <div className='my-40 mx-auto'>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto border-[2px] rounded-lg p-5">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input onChange={(e) => setUname(e.target.value)} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input onChange={(e) => setPass(e.target.value)} placeholder='Password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"> Submit </button>
            </form>
        </div>
    )
}

export default AdminLoginPage