import React from 'react'
import { useDeleteCategoriesMutation, useGetAllCategoriesQuery } from '../redux/oxuaz.api';
import { TiDelete } from "react-icons/ti";
import Swal from 'sweetalert2';
import AdminCreateCategories from './AdminCreateCategories';

function AdminAllCategories() {
    const { data: categories } = useGetAllCategoriesQuery()

    const [deleteCategory] = useDeleteCategoriesMutation()

    function handleClick(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure you want to delete this category?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory({ id }).then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your category item has been deleted.",
                        icon: "success"
                    }).then(() => location.reload());
                }).catch((error) => {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an issue deleting the category item.",
                        icon: "error"
                    });
                });
            }
        });
    }

    return (
        <div className='container mx-auto my-8'>
            <AdminCreateCategories />
            {categories && categories?.map((item, i) => {
                console.log(item);

                return (
                    <div key={i} className='flex justify-between items-center p-3 border-b-2'>
                        <p>{item.name}</p>
                        <TiDelete onClick={() => handleClick(item._id)} className='text-red-500 text-3xl cursor-pointer' />
                    </div>
                )
            })}
        </div>
    )
}

export default AdminAllCategories