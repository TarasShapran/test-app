import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getDiscoverMovies, getTrending} from "../../service/movieService";
import {get_Movies} from "../../redux/action/action";
import MoviesListElement from "../moviesListElement/MoviesListElement";
import CustomPagination from "../pagination/CustomPagination";

export default function Trending() {

    const {movies} = useSelector(({movieReducer}) => movieReducer)

    let [page,setPage] = useState();

    let dispatch = useDispatch();

    useEffect(() => {
        getTrending(page).then(({data: {results}}) => dispatch(get_Movies(results)))
    }, [page])

    return (
        <div>
            <div className={'moviesList'}>
                {
                    movies.map(value => <MoviesListElement key={value.id} item={value}/>)
                }
            </div>
            <CustomPagination
                setPage={setPage}
                numOfPage={page}
            />
        </div>
    );
}