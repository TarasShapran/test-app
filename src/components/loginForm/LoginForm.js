import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import './Login-form.css'

export default function LoginForm() {
    let [formInput, setFormInput] = useState({email: '', password: '', username: '', submit: ''});
    let [users, setUsers] = useState([]);

    let onChangeForm = (e) => {

        setFormInput({...formInput, [e.target.name]: e.target.value})
    };
    let onSave = (e) => {
        e.preventDefault()
        setUsers([...users, formInput]);
    };

    return (
        <div className={"login-form-wrap"}>

            <form onSubmit={onSave}>
                <div>
                    <input type="email" name={'email'} value={formInput.email} onChange={onChangeForm}/></div>
                <div><input type="password" name={'password'} value={formInput.password} onChange={onChangeForm}/></div>
                <div><input type="username" name={'username'} value={formInput.username} onChange={onChangeForm}/></div>
                <div className={"button"}><Link to={'/'}>
                    <input type="submit"/>
                </Link></div>
            </form>

        </div>
    );
}