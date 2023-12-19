import { createSlice } from "@reduxjs/toolkit";
import { isUserLogin } from "../thunks/isUserLoginThunk";
const isUserLoggedInSlice = createSlice({
    name: 'user-logged-in',
    initialState: {
        isLoading: false,
        user: null,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(isUserLogin.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(isUserLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload
        })
        builder.addCase(isUserLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export const isUserLoggedIn = isUserLoggedInSlice.reducer