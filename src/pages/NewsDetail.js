import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import useFetch from "../hooks/useFetch";
import { deleteNews, fetchNews } from "../store";
import Button from "../UI/Button";

const NewsDetail = () => {
  const params = useParams();
  const { category, id } = params;
  const { data } = useFetch(category, id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.login.user);

  const postDeleteHandler = () => {
    console.log("test", id);
    dispatch(fetchNews(category));
    dispatch(deleteNews({ id, category: category }));
    navigate(`/${category}`);
  };
  const editPostHandler=()=>{
    console.log('edit')
  }
  const selectedItem = data.find((item) => item.id === id);
  console.log(selectedItem);
  return (
    <div>
      {userName && (
        <div>
          <div className="flex justify-end items-center w-2/4 mx-auto max-w-xl space-x-4">
            <div className="h-4">
              <Button onClick={postDeleteHandler} className="text-rose-600">
                <RiDeleteBin2Line size={29}/>
              </Button>
            </div>

            <div className="h-4">
              <Button><RiEditLine onClick={editPostHandler} size={29} color="blue"/></Button>
            </div>
          </div>
          <hr className="my-4 w-full border-t border-gray-300 w-2/6 mx-auto" />
        </div>
      )}

      <div className="flex flex-col items-center w-2/4 mx-auto mt-4 max-w-xl">
        <div className="mb-2 text-2xl font-bold">
          {selectedItem?.title.toUpperCase()}
        </div>
        <img
          alt="some o"
          className="max-w-xl pt-6 pb-6"
          src="https://cdn.britannica.com/78/249578-050-01D46C9B/Novak-Djokovic-Serbia-US-Open-2023.jpg"
        />
        <div>{selectedItem?.text}</div>
      </div>
    </div>
  );
};
export default NewsDetail;
