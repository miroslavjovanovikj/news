import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { app } from '../firebase'
import Post from './Post'
const ListOfPosts = () => {
    const dispatch = useDispatch()


    const location = useLocation();
    const currentRouteName = location.pathname.split('/').pop();
    const data = useSelector((state) => state.news.data)


    useEffect(() => {
        dispatch(fetchNews(currentRouteName))
    }, [dispatch, currentRouteName])


    const ListOfPosts = data.map((item) => {
        return <div key={item.id}> <Post item={item} routhName={currentRouteName} /></div>
    })
    return <div>
        {ListOfPosts}</div>
}
export default ListOfPosts




