import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const createNews = createAsyncThunk('news/create', async (data) => {
    
    try {
        const response = await axios.post(
            `https://last-news-42ece-default-rtdb.firebaseio.com/${data.select}.json`, data);
            console.log(data.selectedOption, 'datamlata')
    // fetchNews()
        return response.data;
    } catch (error) {
        console.error('Error creating news:', error);
        throw error;
    }
});

export { createNews };
