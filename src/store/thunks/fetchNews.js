import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchNews = createAsyncThunk('news/featch', async (categoty) => {
    try {
        const response = await axios.get(`https://last-news-42ece-default-rtdb.firebaseio.com/${categoty}.json`)
        return response.data
    } catch (error) {
        console.log(error)
    }
})
export { fetchNews }