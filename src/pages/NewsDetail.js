import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { deleteNews, fetchNews } from "../store";


import Button from "../UI/Button";

const NewsDetail = () => {
    const params = useParams();
    const { category, id } = params;
    const { data } = useFetch(category, id)

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.login.user)
 
    const postDeleteHandler = () => {
        console.log('test', id)
        dispatch(fetchNews(category))
        dispatch(deleteNews({ id, category:category }))
        navigate(`/${category}`);

    }
  
    const selectedItem = data.find((item) => item.id === id)
    console.log(selectedItem)
    return <div>
        {userName && <div className="h-10 border border-slate-300 border-solidml-4 p-9">
            <Button onClick={postDeleteHandler} className="text-rose-600 w-10% ">X</Button>
        </div>}
        <div className="h-10 border border-slate-300 border-solidml-4 p-9"> <Button>Update</Button></div>
        <div>{selectedItem?.title}</div>
        <div>{selectedItem?.text}</div>
    </div>;
};
export default NewsDetail
