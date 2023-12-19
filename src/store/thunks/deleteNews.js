import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchNews } from "./fetchNews";

const deleteNews = createAsyncThunk("post/delete", async (obj, { dispatch }) => {
  try {
    console.log('od vnatre povik');
    console.log(obj);

    await axios.delete(
      `https://last-news-42ece-default-rtdb.firebaseio.com/${obj.category}/${obj.id}.json`
    );

    // Dispatch fetchNews after the deletion is successful
    dispatch(fetchNews(obj.category));

    // You can return a value here if needed
    return obj.id;
  } catch (error) {
    console.error(error);
    // You might want to throw the error or handle it accordingly
    throw error;
  }
});

export { deleteNews };
