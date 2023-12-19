import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/postsSlice";
import { deleteReducer } from "./slices/deleteSlice";
import { newsReducer, deleteUpdate } from "./slices/fetchSlice";
import { authReducer, authentication } from "./slices/authSlice";
import { logInReducer, isUser } from './slices/loginSlice'
import { logOutReducer } from './slices/logoutSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        news: newsReducer,
        delete: deleteReducer,
        auth: authReducer,
        login: logInReducer,
        logOut: logOutReducer,


    }
})
export * from './thunks/createNews';
export * from './thunks/fetchNews';
export * from './thunks/deleteNews';
export * from './thunks/authThunk';
export * from './thunks/loginThunk';
export * from './thunks/logoutThunk';



export { deleteUpdate, authentication, }