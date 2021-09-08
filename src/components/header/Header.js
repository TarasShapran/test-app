import "./Header.css"
import {useDispatch} from "react-redux";
import {searchMovieByName} from "../../service/movieService";
import {search_Movie} from "../../redux/action/action";
import {useState} from "react";
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


let Sun, Moon;

Sun = Moon = styled.svg`
  position: absolute;
  top: 2rem;
  right: 4rem;
  transition: all .5s linear;
`;

export default function Header({theme, toggleTheme}) {
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
                        {theme === 'light' ?
                            < Moon xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                    color={'black'}
                                   className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="fillRule"

                                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </Moon> :
                            < Sun xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                                  color={'white'}
                                  className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="fillRule"

                                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </Sun>}
                    </Link>
                </div>
                <div onClick={toggleTheme}>
                    {theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg"
                                               width="48" height="48" viewBox="0 0 24 24" fill="none"
                                               stroke="#212121" strokeWidth="2" strokeLinecap="round"
                                               strokeLinejoin="round"
                                               className="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </Moon>
                        :
                        <Sun xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                             stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-sun">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </Sun>}
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