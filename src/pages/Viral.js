import useFetch from "../hooks/useFetch";
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import{useEffect} from 'react';
import { fetchNews } from "../store";
const Viral = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const currentRouteName = location.pathname.split('/').pop();


    useEffect(() => {
        dispatch(fetchNews(currentRouteName))
    }, [dispatch, currentRouteName,]);

    const { listItems } = useFetch(currentRouteName)
    return <div>
        {listItems}
    </div>
}
export default Viral