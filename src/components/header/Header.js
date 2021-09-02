import "./Header.css"
import {useDispatch} from "react-redux";
import {searchMovieByName} from "../../service/movieService";
import {search_Movie} from "../../redux/action/action";
import {useState} from "react";

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
        <div className={'wrap'}>

            <header className={"header"}>
                <form onSubmit={onSubmit}>
                    <input className={'search'} type={'search'} name={'search'} placeholder={"Search..."}
                           onSubmit={onSubmit} onChange={onFormChange}/>
                </form>
            </header>

        </div>
    );
}