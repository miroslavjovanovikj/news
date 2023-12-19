import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChange } from '../../firebase';
const isUserLogin = createAsyncThunk('isUser/login', () => {
    return new Promise((reslove, reject) => {
        console.log('test')
        try {
            onAuthStateChange((user) => {
                if (user) {
                    console.log('user')
                    reslove(user)
                } else {
                    console.log('no user')
                    reject(null)
                }

            });
        } catch (error) {
            console.error('Error checking user authentication:', error);

        }
    })
})
export { isUserLogin }