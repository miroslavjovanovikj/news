import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteUpdate } from "../slices/fetchSlice";

const deleteNews = createAsyncThunk("post/delete", async (obj, { dispatch }) => {
  try {

    await axios.delete(
      `https://last-news-42ece-default-rtdb.firebaseio.com/${obj.category}/${obj.id}.json`
    );
    dispatch(deleteUpdate(obj.id));

    return obj.id;
  } catch (error) {
    console.error(error);
    // You might want to throw the error or handle it accordingly
    throw error;
  }
});

export { deleteNews };
