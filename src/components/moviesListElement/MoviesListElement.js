import './MoviesListElement.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function MoviesListElement({item}) {
    let {title, poster_path, overview, vote_average, id} = item;

    let setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green';
        } else if (vote >= 6) {
            return 'orange';
        } else {
            return 'red'
        }
    };
    return (
        <div className={'MoviesListElement'}>
            <Link to={{pathname: '/movie-list/' + id, state: item}}>
                <img src={'https://image.tmdb.org/t/p/w1280/' + poster_path} alt={title} />
            </Link>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={'tag ' + setVoteClass(vote_average)}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>

        </div>
    );
}