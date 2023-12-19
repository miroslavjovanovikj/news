import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "../thunks/fetchNews";

const fetchSlice = createSlice({
    name: "fetch",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        deleteUpdate(state, action) {
           
            state.data = state.data.filter((item) => item.id !== action.payload)
            console.log(state.data, 'od recucerot')
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.isLoading = false;
            const allData = []
            for (let key in action.payload) {
                const data = action.payload
                allData.push({
                    id: key,
                    title: data[key].title,
                    text: data[key].textArea,
                    photo: data[key].file,
                });
            }
            state.data = allData
        });
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    },
});
export const newsReducer = fetchSlice.reducer
export const { deleteUpdate } = fetchSlice.actions
