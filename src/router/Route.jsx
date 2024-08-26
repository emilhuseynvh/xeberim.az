import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import PublicPage from "../layout/PublicPage"
import Home from "../pages/Home"
import AdminPage from "../layout/AdminPage"
import Category from "../Component/Category"
import Item from "../Component/Item"
import AdminLoginPage from "../layout/AdminLoginPage"
import AdminCreateNews from "../Component/AdminCreateNews"
import AdminDeleteNews from "../Component/AdminDeleteNews"
import AdminAllCategories from "../Component/AdminAllCategories"
import AdminRegister from "../Component/AdminRegister"
import Auth from "./Auth"

const token = localStorage.getItem('token')


export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicPage />}>
                <Route index path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/item" element={<Item />} />
                <Route path="category/item" element={<Item />} />
            </Route>

            <Route path="/admin" element={
                <Auth>
                    <AdminPage />
                </Auth>
            } >

            <Route index path="/admin/home" element={<AdminCreateNews />} />
            <Route path="delete-news" element={<AdminDeleteNews />} />
            <Route path="categories" element={<AdminAllCategories />} />
            <Route path="register" element={<AdminRegister />} />
        </Route >
        </>
    )
)