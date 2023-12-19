import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from './fetchNews';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const createNews = createAsyncThunk('news/create', async (data) => {

    try {
        const response = await axios.post(
            `https://last-news-42ece-default-rtdb.firebaseio.com/${data.selectedOption}.json`, data);

    fetchNews(data.selectedOption)
        return response.data;
    } catch (error) {
        console.error('Error creating news:', error);
        throw error;
    }
});

export { createNews };
