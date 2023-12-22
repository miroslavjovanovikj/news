import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/postsSlice";
import { deleteReducer } from "./slices/deleteSlice";
import { newsReducer, deleteUpdate, editUpdate } from "./slices/fetchSlice";
import { authReducer, authentication } from "./slices/authSlice";
import { logInReducer } from './slices/loginSlice'
import { logOutReducer } from './slices/logoutSlice';
import { editReducer } from "./slices/editSlice";


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        news: newsReducer,
        delete: deleteReducer,
        auth: authReducer,
        login: logInReducer,
        logOut: logOutReducer,
        edit:editReducer


    }
})
export * from './thunks/createNews';
export * from './thunks/fetchNews';
export * from './thunks/deleteNews';
export * from './thunks/authThunk';
export * from './thunks/loginThunk';
export * from './thunks/logoutThunk';
export * from './thunks/editThunk'



export { deleteUpdate, authentication,editUpdate }