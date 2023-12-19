
import useFetch from "../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import { fetchNews,  } from "../store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Sport = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentRouteName = location.pathname.split('/').pop();

    useEffect(() => {
        dispatch(fetchNews(currentRouteName))
    }, [dispatch, currentRouteName,]);

    const { listItems } = useFetch(currentRouteName)

    return (
        <div>
             {listItems}
        </div>
    )
}
export default Sport;