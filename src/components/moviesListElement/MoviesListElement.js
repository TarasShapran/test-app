import './MoviesListElement.css'

export default function MoviesListElement({title, poster_path, overview, vote_average, backdrop_path,}) {
    return (
        <div className={'MoviesListElement'}>

            <img src={'https://image.tmdb.org/t/p/w1280/' + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}