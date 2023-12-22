
import { useLocation } from 'react-router-dom'
import useFetch from "../hooks/useFetch";
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { fetchNews } from '../store';
const Health = () => {

   const dispatch = useDispatch()
    const location = useLocation();
    const currentRouteName = location.pathname.split('/').pop();
    
    useEffect(() => {
        dispatch(fetchNews(currentRouteName))
    }, [dispatch, currentRouteName,]);

    const { newsList } = useFetch(currentRouteName)
    return <div >{newsList} </div>
}
export default Health