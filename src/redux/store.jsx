import { configureStore } from "@reduxjs/toolkit";
import { oxuazApi } from "./oxuaz.api";

export const store = configureStore({
    reducer: {
        [oxuazApi.reducerPath] : oxuazApi.reducer,
        // counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(oxuazApi.middleware)
});
