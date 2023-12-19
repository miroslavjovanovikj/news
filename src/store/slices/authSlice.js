import { createSlice } from '@reduxjs/toolkit'
import { userAuth } from '../thunks/authThunk';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(userAuth.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(userAuth.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(userAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }

})

export const authReducer = authSlice.reducer;
export const { authentication } = authSlice.actions;