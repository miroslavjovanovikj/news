import { useState } from "react";
import { useDispatch } from 'react-redux'
import Button from "../UI/Button";
import { createNews, logOutUser, } from "../store";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import FormBody from "../UI/FormBody";
import {INPUT_DATA} from '../static/inputData'

const buttonStyle = 'bg-sky-900 p-3 text-white border-solid border-neutral-300 rounded'
const Admin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {title, file, text, type }=INPUT_DATA;

    const [validation, setValidation] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        select:"",
        title:"",
        file:"",
        text:''

    })

    const handleInputChange = (e)=>{
        const {name, value} = e.target
        console.log(`Setting ${name} to ${value}`);
        setCreateFormData({
            ...createFormData,
            [name]:value
        })
    }
  
    const logOutHandler = () => {
        dispatch(logOutUser())
    }

    const newsSubmitHanler = (e) => {
        e.preventDefault();
        const {title, text, file, select} = createFormData
        if (!title.trim() || !text.trim() || !file.trim() || !select ) {
            setValidation(true)
            return
        }
        setValidation(false)
        dispatch(createNews(createFormData));
        navigate(`/${select}`);
    };



    let border
    if (validation) {
        border = 'border border-solid border-red-600 rounded '
    } else {
        border = 'border border-solid border-neutral-300 rounded '
    }
    const dataInputs = [
        {
           ...type,
            onChange: handleInputChange,
        },        
        {
           ...title,
            onChange:handleInputChange
        },
        {
           ...file,
            onChange: handleInputChange,
        },
        
        {
            ...text,
            onChange:handleInputChange
        }
    ]
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
                    <FormBody data={dataInputs}/>
                    <div className="text-right pr-6 pb-3 ">
                        <Button className={buttonStyle} type="submit">Create</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Admin;
