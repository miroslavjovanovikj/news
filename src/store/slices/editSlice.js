import {createSlice} from '@reduxjs/toolkit';
import { editNews } from '../thunks/editThunk';
const editSlice = createSlice({
    name:'edit',
    initialState:{
        isLoading:false,
        error:null
    },
    extraReducers(builder){
        builder.addCase(editNews.pending,(state, action)=>{
            state.isLoading=true;
        })
        builder.addCase(editNews.fulfilled, (state, action)=>{
            state.isLoading=false;
        })
        builder.addCase(editNews.rejected, (state, action)=>{
            state.isLoading=false;
            state.error=action.error
        })
    }
})
export const editReducer = editSlice.reducer;