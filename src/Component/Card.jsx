import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaRegTrashAlt, FaPen } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDeleteNewsMutation, useGetAllCategoriesQuery, useLikeMutation, useDislikeMutation, useUpdateNewsMutation, useViewMutation } from '../redux/oxuaz.api';
import toast from 'react-hot-toast';

function Card({ item, admin, id }) {
  const [deleteNews] = useDeleteNewsMutation();
  const { data: getAllCategories } = useGetAllCategoriesQuery();
  const [update, setUpdate] = useState(false);
  const [edit] = useUpdateNewsMutation();
  const [like, {error, data}] = useLikeMutation();
  const [dislike] = useDislikeMutation();
  const [view] = useViewMutation();
  

  const [updateImg, setUpdateImg] = useState(item.img || '');
  const [updateCategory, setUpdateCategory] = useState(item.category_id?._id || '');
  const [updateTitle, setUpdateTitle] = useState(item.title || '');
  const [updateDesc, setUpdateDesc] = useState(item.description || '');

  const navigate = useNavigate();

  function handleDelete() {
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
        deleteNews({ id })
          .then(() => {
            Swal.fire("Deleted!", "Your news item has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "There was an issue deleting the news item.", "error");
          });
      }
    });
  }

  function handleSubmit() {
    edit({ id, img: updateImg, title: updateTitle, description: updateDesc, category_id: updateCategory })
      .then(() => {
        setUpdate(false);
        toast.success('News Updated Successfully');
      })
      .catch(() => {
        toast.error('Failed to update news. Please try again.');
      });
  }

  function handleLike(id) {
    like({ id }).then(() => location.reload())
  }

  function handleDislike(id) {
    dislike({ id }).then(() => location.reload())
  }

  function handleNavigate(id){
    navigate(`item/?${item.title}`, { state: { someData: item } })
    view({ id })
  }

  return (
    <>
      {/* View Mode */}
      <div
        className={` ${update ? 'hidden' : 'flex'} relative flex-col items-start xs:w-[46%] gap-3 cursor-pointer w-[100%] md:w-[30%] lg:w-[23%] border-[1px] pb-7 duration-500 hover:shadow-2xl`} >
        <div className='relative w-full' onClick={() => handleNavigate(item._id)}>
          <img className='w-full' src={item.img} alt={item.title} />
          <div className='absolute bottom-9 right-4 text-white flex items-center gap-1'>
            <IoEyeSharp className='text-xl' />
            <span className='text-md font-semibold'>{item.view}</span>
          </div>
          <div className='flex justify-between bg-red_ text-white px-2 items-center py-1'>
            <p>07 Avq 2024 - 12:09</p>
            <p>{item.category_id?.name}</p>
          </div>
        </div>
        <p className='cursor-pointer px-2'>{item.title}</p>
        <div className={`${admin ? 'block' : 'hidden'} absolute right-2 top-2 text-white flex gap-5`}>
          <FaRegTrashAlt onClick={handleDelete} className={`${admin ? 'block' : 'hidden'}`} />
          <FaPen onClick={() => setUpdate(true)} className='text-white' />
        </div>
        <div className='flex gap-3 mt-3'>
          <div onClick={() => handleLike(item._id)} className='flex items-center gap-2 cursor-pointer'>
            <AiFillLike  className='text-xl' /> {item.like}
          </div>
          <div onClick={() => handleDislike(item._id)} className='flex items-center gap-2 cursor-pointer'>
            <BiSolidDislike className='text-xl' /> {item.dislike}
          </div>
        </div>
      </div>

      {/* Edit Mode */}
      <div className={` ${update ? 'block' : 'hidden'} relative flex-col items-start xs:w-[46%] gap-3 cursor-pointer w-[100%] md:w-[30%] lg:w-[23%] border-[1px] pb-7 duration-500 hover:shadow-2xl`}>
        <div className='relative w-full'>
          <input
            type='text'
            onChange={(e) => setUpdateImg(e.target.value)}
            className='w-full'
            value={updateImg}
          />
          <div className='bg-red_ text-white px-2 items-center py-1'>
            <p>07 Avq 2024 - 12:09</p>
            <select
              onChange={(e) => setUpdateCategory(e.target.value)}
              value={updateCategory}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option disabled>Select Category</option>
              {getAllCategories?.map((category, i) => (
                <option key={i} value={category._id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
        <input
          onChange={(e) => setUpdateTitle(e.target.value)}
          value={updateTitle}
          className='cursor-pointer px-2'
        />
        <input
          onChange={(e) => setUpdateDesc(e.target.value)}
          type="text"
          value={updateDesc}
          className='cursor-pointer px-2'
        />
        <div className='flex gap-4 ml-5 mt-16'>
          <button onClick={handleSubmit} className='bg-blue-700 text-white px-7 py-2'>Save</button>
          <button className='bg-red-700 text-white px-7 py-2' onClick={() => setUpdate(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default Card;

