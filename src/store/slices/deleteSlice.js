import { createSlice } from "@reduxjs/toolkit";
import { deleteNews } from '../thunks/deleteNews'

const deleteSlice = createSlice({
    name: 'delete',
    initialState: {
        isLoading: false,
        idItem: '',
        error: null
    },
    extraReducers(builder) {
        builder.addCase(deleteNews.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteNews.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(deleteNews.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})
export const deleteReducer = deleteSlice.reducer