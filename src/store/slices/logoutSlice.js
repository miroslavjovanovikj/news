import { createSlice } from '@reduxjs/toolkit';
import { logOutUser } from '../thunks/logoutThunk';
const logOutSlice = createSlice({
    name: 'log-out',
    initialState: {
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(logOutUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(logOutUser.fulfilled, (state, action) => {
            state.error = false;
        })
        builder.addCase(logOutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.rejected
        })
    }
})
export const logOutReducer = logOutSlice.reducer