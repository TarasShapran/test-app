import "./Header.css"
import {useDispatch} from "react-redux";
import {searchMovieByName} from "../../service/movieService";
import {search_Movie} from "../../redux/action/action";
import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


export default function Header() {
    let [formInput, setFormInput] = useState({search: ''});
    let dispatch = useDispatch();
    let onSubmit = (e) => {
        e.preventDefault();
        return searchMovieByName(formInput.search).then(({data: {results}}) => dispatch(search_Movie(results)))

    };
    let onFormChange = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value})
    };
    return (
        <div className={''}>

            <header className={"wrap"}>
                <div className={'user-link'}>
                    <Link to={'/login'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" color={'white'}
                             className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="fillRule"

                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </Link>
                </div>
                <div className={'header-img'}>

                </div>
                <div className={'navigate'}>

                    <Link to={'/'}>home</Link>
                    <Link to={'/movie-list'}>movies</Link>

                </div>
                <div className={'form-search'}>
                    <form onSubmit={onSubmit}>

                        <input className={'search'} type={'search'} name={'search'} placeholder={"Search..."}
                               onChange={onFormChange}/>
                    </form>
                </div>
            </header>

        </div>
    );
}