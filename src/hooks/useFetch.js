import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../store";
import { Link } from "react-router-dom";
import Post from "../components/Post";


const useFetch = (curRoute, id) => {

    const { data } = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews(curRoute))
        // dispatch(deleteUpdate(id))
    }, [dispatch, curRoute, id]);


    const listItems = data.map((item) => {
        return <div key={item.id}>
            <Link to={`/${curRoute}/${item.id}`}>
                <Post item={item} routhName={curRoute} />
            </Link>
        </div>
    })

    return { listItems, data, fetchNews };
};
export default useFetch;
