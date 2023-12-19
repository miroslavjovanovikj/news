import { logOutUser } from '../store/thunks/logoutThunk'
import { useDispatch } from 'react-redux'
const HomePage = () => {
    const dispatch = useDispatch()
    const logOUtHan = () => {
        dispatch(logOutUser())
    }
    return <div>
        <button onClick={logOUtHan}>Logout</button>
        {/* <ListOfPosts /> */}
    </div>
}
export default HomePage