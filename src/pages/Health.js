
import { useLocation } from 'react-router-dom'
import useFetch from "../hooks/useFetch";
import { useSelector } from 'react-redux'
const Health = () => {
    const user = useSelector(state => state.login.user)
    console.log(user)
    const location = useLocation();
    const currentRouteName = location.pathname.split('/').pop();
    const { newsList } = useFetch(currentRouteName)
    return <div >{newsList} </div>
}
export default Health