import { createSlice } from '@reduxjs/toolkit';
import { createNews } from '../thunks/createNews';
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        message: true,
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(createNews.pending, (state, action) => {
            state.isLoading = true
            state.message = false
        })
        builder.addCase(createNews.fulfilled, (state, action) => {
            state.isLoading = false
            state.message = true
        })
        builder.addCase(createNews.rejected, (state, action) => {
            state.isLoading = false;
            state.message = true
            state.error = action.error
        })
    }
})

export const postsReducer = postsSlice.reducer