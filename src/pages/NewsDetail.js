import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFetch from "../hooks/useFetch";
import { deleteNews } from "../store";
import Button from "../UI/Button";
import NewsDetailItem from "../components/NewsDetailItem";
import FormBody from "../UI/FormBody";
import { INPUT_DATA } from "../static/inputData";
import NewsDetailsButtons from "../components/NewsDetailsButtons";
import { editNews,editUpdate } from "../store";
const NewsDetail = () => {
  const params = useParams();
  const { category, id } = params;
  const { data } = useFetch(category, id);
  const selectedItem = data.find((item) => item.id === id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.login.user);
  const border = "border border-solid border-neutral-300 rounded";
  const buttonStyle = "p-3 text-white";


  const { title, file, text } = INPUT_DATA;

  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({
    title: selectedItem?.title,
    file: selectedItem?.photo,
    text: selectedItem?.text,
    id:selectedItem?.id
  });
  const postDeleteHandler = () => {
    dispatch(deleteNews({ id, category: category }));
    navigate(`/${category}`);
  };
  const editPostHandler = () => {
    setEdit(true);
  };
  const cancelEditHandler = () => {
    setEdit(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };
  const onEditSubmit = (e)=>{
    e.preventDefault()
    dispatch(editNews({...item, category}))
    dispatch(editUpdate({...item, category}))
    setEdit(false)
  }
  const dataInputs = [
    {
      ...title,
      onChange: handleInputChange,
      value: item.title,
    },
    {
      ...file,
      onChange: handleInputChange,
      value: item?.photo,
    },
    {
      ...text,
      onChange: handleInputChange,
      value: item.text,
    },
  ];
  return (
    <div>
      {userName && (
        <NewsDetailsButtons
          postDeleteHandler={postDeleteHandler}
          editPostHandler={editPostHandler}
        />
      )}
      {edit && (
        <form
        onSubmit={onEditSubmit}
          className={`mt-10 flex-col items-center w-1/3 mx-auto mt-4 ${border}`}
        >
          <FormBody data={dataInputs} />
          <div className="text-right pr-6 pb-3 ">
            <Button
              className={`bg-red-700 ${buttonStyle} ${border}`}
              onClick={cancelEditHandler}
            >
              Cancel
            </Button>
            <Button
              className={`bg-sky-900 ${buttonStyle} ${border}`}
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      )}
      {!edit && <NewsDetailItem selectedItem={selectedItem} />}
    </div>
  );
};
export default NewsDetail;
