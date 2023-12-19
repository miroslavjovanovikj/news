
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase'; // Import your firebase config


const userAuth = createAsyncThunk('user/auth', async (user) => {
    try {

        const auth = getAuth(app); // Pass the firebase instance to getAuth
        const signUp = await createUserWithEmailAndPassword(auth, user.email, user.password);
        console.log(signUp)
        // return signUp;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error; // Rethrow the error to let the calling code handle it
    }
});

export { userAuth };