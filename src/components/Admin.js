import { useState } from "react";
import { useDispatch } from 'react-redux'
import Input from "../UI/Input";
import Button from "../UI/Button";
import { createNews, logOutUser, } from "../store";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";
const DATA = [
    { value: "sport", label: "sport" },
    { value: "viral", label: "viral" },
    { value: "health", label: "health" },
];
const buttonStyle = 'bg-sky-900 p-3 text-white border-solid border-neutral-300 rounded'
const Admin = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [textArea, setTextArea] = useState("");

    const [file, setFile] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [validation, setValidation] = useState(false)

    const inputsHandler = (state, e) => {
        state(e.target.value);
    };
    const location = useLocation();
    const currentRouteName = location.pathname.split('/').pop();
    console.log(currentRouteName)
    const navigate = useNavigate();
    const newsSubmitHanler = (e) => {
        e.preventDefault();
        if (!title.trim() || !textArea.trim() || !file || !selectedOption.trim()) {
            setValidation(true)
            return
        }
        setValidation(false)
        const data = { title, textArea, file, selectedOption }
        dispatch(createNews(data));
        navigate(`/sport`);
        setTitle("");
        setFile("");
        setTextArea("");
    };

    const logOutHandler = () => {
        dispatch(logOutUser())
    }

    let border
    if (validation) {
        border = 'border border-solid border-red-600 rounded '
    } else {
        border = 'border border-solid border-neutral-300 rounded '
    }

    return (
        <div>
            <div>
                <Link to='/login'>Log in</Link>
                <Button onClick={logOutHandler}></Button>
            </div>
            <form onSubmit={newsSubmitHanler}>
                {validation && <p>All filds are required</p>}
                <div className={`w-1/3 mx-auto mt-14 ${border}`}>
                    <div className="text-center mt-3">Create Post</div>
                    <div className="p-4">
                        <Input
                            elementType="select"
                            onChange={(e) => inputsHandler(setSelectedOption, e)}
                            data={DATA}
                        />
                    </div>
                    <div className="p-4 mt-5">
                        <Input
                            name="text"
                            elementType="input"
                            onChange={(e) => inputsHandler(setTitle, e)}
                            placeholder="Title"
                            value={title}
                        />
                    </div>
                    <div className="p-4">
                        <Input
                            name="file"
                            elementType="input"
                            onChange={(e) => inputsHandler(setFile, e)}
                        />
                    </div>
                    <div className="p-4">
                        <Input
                            elementType="text-area"
                            value={textArea}
                            onChange={(e) => inputsHandler(setTextArea, e)}
                            placeholder="Text"
                        />
                    </div>

                    <div className="text-right pr-4 pb-3 ">
                        <Button className={buttonStyle} type="submit">Create</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Admin;
