import {useDispatch, useSelector} from "react-redux";
import {createContext, useEffect, useState} from "react";
import {get_Movies, search_MovieByGenre} from "../../redux/action/action";
import {getDiscoverMovies} from "../../service/movieService";
import MoviesListElement from "../moviesListElement/MoviesListElement";
import './MoviesList.css'
import Filter from "../filter/Filter";
import useGenre from "../../hooks/useGenre";


export default function MoviesList() {
    const {movies} = useSelector(({movieReducer}) => movieReducer);
    let [selectedGenres, setSelectedGenres] = useState([]);

    let [year,setYear]=useState('');


    let dispatch = useDispatch();
    let useGenre1 = useGenre(selectedGenres);

    useEffect(() => {
        getDiscoverMovies(1, useGenre1,year).then(({data: {results}}) => dispatch(get_Movies(results)))
    }, [useGenre1,year])


    return (
        <div>
            <div className={'filterDiv'}>
                <Filter selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                        year={year}
                        setYear={setYear}
                />

            </div>
            <div className={'moviesList'}>
                {
                    movies.map(value => <MoviesListElement key={value.id} item={value}/>)

                }
            </div>
        </div>
    );
}