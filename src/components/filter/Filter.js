import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getGenres} from "../../service/movieService";
import {get_Genres, search_MovieByGenre} from "../../redux/action/action";
import Genre from "../genre/Genre";
import {Link} from "react-router-dom";

export default function Filter() {
    let {genres} = useSelector(({filterReducer}) => filterReducer);
    let dispatch = useDispatch();
    let [genreState, setGenreState] = useState('');

    useEffect(() => {
        getGenres().then(({data: {genres}}) => dispatch(get_Genres(genres))
        )
    }, [])

    return (
        <div>
            <select
                onChange={(e) => {
                    const selectedFood = e.target.value;
                    setGenreState(selectedFood);

                }}>
                {/*<Link to={{pathname: '/movie-list', state: genreState}}>
                </Link>*/}

                {
                        genres.map(val => <Genre key={val.id} item={val}/>)
                    }
            </select>


        < /div>
    );
}