import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { loginUser, userAuth } from "../store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase'
import FormBody from "../UI/FormBody";
import { useLocation } from 'react-router-dom'
import Button from "../UI/Button";

const UserAccess = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const [authFormData, setAuthFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    // useEffect(() => {
    //     const auth = getAuth(app)
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/auth.user
    //             dispatch(isUser(user))
    //             // ...
    //         } else {
    //             dispatch(isUser(null))
    //         }
    //     })
    // }, [dispatch])
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setAuthFormData({
            ...authFormData,
            [name]: value,
        });
    };

    const authFormSubmit = (e) => {
        e.preventDefault();

        console.log(location.pathname)
        if (location.pathname === '/login') {
            dispatch(loginUser(authFormData))
        } else if (location.pathname === "/signupAdm") {

            dispatch(userAuth(authFormData));
        }

    };
    // const submitUserHandler = () => {
    //     dispatch(isUser())
    // }
    const dataInputs = [
        {
            type: "text",
            name: "name",
            elementType: "input",
            onChange: handleInputChange,
        },
        {
            type: "email",
            name: "email",
            elementType: "input",
            onChange: handleInputChange,
        },
        {
            type: "password",
            name: "password",
            elementType: "input",
            onChange: handleInputChange,
        },
    ];
    return (
        <div>
            <form onSubmit={authFormSubmit}>
                <FormBody data={dataInputs} />
                <Button type="submit" >Sign In</Button>
            </form>
        </div>
    );
};

export default UserAccess;