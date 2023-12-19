import useFetch from "../hooks/useFetch";
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Viral = () => {
    const location = useLocation();
    const user = useSelector(state => state.login.user)
    console.log(user)
    const currentRouteName = location.pathname.split('/').pop();
    
    const { listItems } = useFetch(currentRouteName)
    return <div>
        {listItems}
    </div>
}
export default Viral