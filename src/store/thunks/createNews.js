// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// const createNews = createAsyncThunk('news/create', async (data) => {
    
//     try {
//         const response = await axios.post(
//             `https://last-news-42ece-default-rtdb.firebaseio.com/${data.select}.json`, data);
//             console.log(data.selectedOption, 'datamlata')
//     // fetchNews()
//         return response.data;
//     } catch (error) {
//         console.error('Error creating news:', error);
//         throw error;
//     }
// });

// export { createNews };
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from './fetchNews';
import axios from 'axios';
import { storage,  } from '../../firebase';
import { uploadBytes, getDownloadURL, ref, child } from 'firebase/storage';
const createNews = createAsyncThunk('news/create', async (data, {dispatch}) => {
    const { select, title, file, text } = data;

    try {
        // Formulate the path for the file within Firebase Storage
        const filePath = `${select}/${file.name}`;

        // Upload the file to Firebase Storage
        await uploadBytes(ref(storage, filePath), file);

        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(ref(storage, filePath));
            console.log(downloadURL)
        // Prepare data to be stored in Firebase Realtime Database
        const postData = {
            select: select,
            title: title,
            text: text,
            file: downloadURL,  // store download URL instead of the file
        };

        // Store postData in Firebase Realtime Database
        const response = await axios.post(
            `https://last-news-42ece-default-rtdb.firebaseio.com/${select}.json`, postData
        );

        dispatch(fetchNews(select))
        return response.data;

    } catch (error) {
        console.error('Error creating news:', error);
        throw error;
    }
});




export { createNews };

