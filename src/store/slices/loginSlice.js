import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from '../thunks/loginThunk'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        error: null,
        user: null,

    },
    reducers: {
        isUser(state, action) {
            state.user = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            console.log(action.payload, "test")
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })

    }
})

export const logInReducer = loginSlice.reducer
export const { isUser } = loginSlice.actions