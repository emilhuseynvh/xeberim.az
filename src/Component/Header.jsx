import React, { useState } from 'react'
import { FaSearch, FaFacebookF, FaRss, FaYoutube, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useGetAllCategoriesQuery } from '../redux/oxuaz.api';
import { Link, useNavigate } from 'react-router-dom';
import SearchNews from './SearchNews';

function Header() {
  const [flag, setFlag] = useState(false);

  const { data: allCategoriesData } = useGetAllCategoriesQuery();



  const navigate = useNavigate()



  return (
    <header>
      <div className='bg-[#295080] relative z-50'>
        <div className="m-auto container flex justify-between items-center">
          <Link to='/'><img className='object-contain select-none' src="/assets/img/logo.png" alt="" /></Link>
          <RxHamburgerMenu className={`text-white medium:hidden block text-2xl cursor-pointer ${flag ? 'hidden' : 'block'}`} onClick={() => setFlag(!flag)} />
          <IoClose className={`text-white text-2xl cursor-pointer ${flag ? 'block' : 'hidden'}`} onClick={() => setFlag(!flag)} />
          <div className='hidden items-center medium:flex'>
            <p className='text-white px-3 py-4 duration-300 text-base font-medium cursor-pointer'>Haqqında</p>
            <p className='text-white px-3 py-4 duration-300 text-base font-medium cursor-pointer'>Əlaqə</p>
              <SearchNews />
            <div className='flex gap-3 items-center'>
              <FaFacebookF className='text-white text-2xl my-3 cursor-pointer' />
              <FaYoutube className='text-white text-2xl my-3 cursor-pointer' />
              <FaRss className='text-white text-2xl my-3 cursor-pointer' />
            </div>
            <FaInstagram className='text-2xl my-3 cursor-pointer text-[#036] ml-16' />
          </div>
        </div>
        <div className='bg-red_ hidden medium:flex justify-center gap-6'>
          <p onClick={() => navigate(`category?name=Xəbərlər`, { state: { someData: 'allCategories' } })} className='text-white px-3 py-4 duration-300 text-base font-medium cursor-pointer border-b-4'>Xəbərlər</p>
          {allCategoriesData?.map((c, i) => <p key={i} onClick={() => navigate(`category?name=${c.name}`, { state: { someData: c._id } })} className='text-white px-3 py-4 duration-300 text-base font-medium cursor-pointer'>{c.name}</p>)}
        </div>
      </div>
      {/*  H A M B U R G E R   M E NU   */}
      <div className={`w-[350px] my-10 fixed z-10 bg-white border-r-2 duration-500 h-full top-0 py-6 ${flag ? 'translate-x-0' : '-translate-x-96'}`}>
        <div>
          <div className='my-3 mx-6 rounded-sm bg-white relative max-w-56'>
            <input className='rounded-sm pl-5 py-1 outline-none' placeholder='Axtarış' type="text" />
            <FaSearch className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' />
          </div>
        </div>

        <div className='gap-6 mx-6'>
          <p className='text-black px-3 py-4 duration-300 text-base font-medium cursor-pointer border-b-[1px]'>Xəbərlər</p>
          {allCategoriesData?.map((c, i) => <p key={i} onClick={() => navigate(`category?name=${c.name}`, { state: { someData: c._id } })} className='text-black px-3 py-4 duration-300 text-base font-medium cursor-pointer border-b-[1px]'>{c.name}</p>
          )}
        </div>
      </div>
    </header>

  )
}

export default Header