import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");

export const oxuazApi = createApi({
    reducerPath: "oxuazApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://oxuaz.yetim.me/" }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ login, password }) => ({
                url: '/register',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ login, password })
            })
        }),
        login: builder.mutation({
            query: ({ login, password }) => ({
                url: `/login`,
                method: "POST",
                body: { login, password }
            }),
        }),
        createNews: builder.mutation({
            query: ({ img, title, description, category_id, token }) => ({
                url: `/news`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ img, title, description, category_id })
            })
        }),
        deleteNews: builder.mutation({
            query: ({ id }) => ({

                url: `/news/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),

        }),
        searchNews: builder.query({
            query: (search) => `/news/search?title=${search}`,
        }),
        getAllNews: builder.query({
            query: () => `/news`,
        }),
        getNewsById: builder.query({
            query: (id) => `/news/${id}`,
        }),
        getNewsByCategoryId: builder.query({
            query: (id) => `/news_by_categ/${id}`,
        }),
        getAllCategories: builder.query({
            query: () => `/categories`,
        }),
        getPaginatedNews: builder.query({
            query: (page) => `/news_page/${page}`,
        }),
        deleteCategories: builder.mutation({
            query: ({ id }) => ({
                url: `/categories/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        updateNews: builder.mutation({
            query: ({ id, img, title, description, category_id }) => ({
                url: `/news/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ img, title, description, category_id })
            })
        }),
        createCategory: builder.mutation({
            query: ({ name }) => ({
                url: `/categories`,
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name })
            })
        }),
        like: builder.mutation({
            query: ({ id }) =>({
                url: `/news_like/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        dislike: builder.mutation({
            query: ({ id }) => ({
                url: `/news_dislike/${id}`,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }),
        
    }),
    view: builder.mutation({
        query: ({ id }) => ({
            url: `/news_view/${id}`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useCreateNewsMutation,
    useDeleteNewsMutation,
    useSearchNewsQuery,
    useGetAllNewsQuery,
    useGetNewsByIdQuery,
    useGetNewsByCategoryIdQuery,
    useGetAllCategoriesQuery,
    useDeleteCategoriesMutation,
    useCreateCategoryMutation,
    useUpdateNewsMutation,
    useLikeMutation,
    useDislikeMutation,
    useViewMutation,
    useGetPaginatedNewsQuery
} = oxuazApi;
