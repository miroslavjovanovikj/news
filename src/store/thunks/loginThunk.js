import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase'

const loginUser = createAsyncThunk('create/user', async (user) => {
    try {
        const auth = getAuth(app)
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)


        return userCredential.user.toJSON()  // Assuming user is a property with serializable data

    } catch (error) {
        console.log(error);
        // You might want to throw the error here to let the rejected action propagate
        throw error;
    }
});

export { loginUser }
