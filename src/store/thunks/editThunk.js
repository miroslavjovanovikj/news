import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const URL =`https://last-news-42ece-default-rtdb.firebaseio.com/`;

const editNews = createAsyncThunk('news/edit', async(obj)=>{
    console.log(obj)
    try{
      await axios.patch(`${URL}${obj.category}/${obj.id}.json`, obj)
    }catch(error){
        console.log(error)
    }

})

export {editNews}