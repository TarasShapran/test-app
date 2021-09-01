import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {get_Movies} from "../../redux/action/action";
import {getDiscoverMovies} from "../../service/movieService";
import MoviesListElement from "../moviesListElement/MoviesListElement";
import './MoviesList.css'

export default function MoviesList() {

    let {movies} = useSelector(({movieReducer}) => movieReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        getDiscoverMovies().then(({data: {results}}) => dispatch(get_Movies(results)))

    }, [])


    return (
        <div className={'moviesList'}>

                {
                    movies.map(value => <MoviesListElement key={value.id} item={value}/>)
                }


        </div>
    );
}