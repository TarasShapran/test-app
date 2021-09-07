import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
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
        <div>
            <form onSubmit={onSave}>
                <input type="email" name={'email'} value={formInput.email} onChange={onChangeForm}/>
                <input type="password" name={'password'} value={formInput.password} onChange={onChangeForm}/>
                <input type="username" name={'username'} value={formInput.username} onChange={onChangeForm}/>
                <Link to={'/'}>
                    <input type="submit"/>
                </Link>
            </form>

        </div>
    );
}