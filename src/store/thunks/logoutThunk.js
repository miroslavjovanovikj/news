import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signOut, } from 'firebase/auth'
import { app } from '../../firebase'
const logOutUser = createAsyncThunk('logout/user', async () => {
    const auth = getAuth(app)
    signOut(auth)
    console.log('trt')
})

export { logOutUser }