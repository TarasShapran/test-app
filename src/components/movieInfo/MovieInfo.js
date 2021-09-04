import './MovieInfo.css'

export default function MovieInfo({location: {state}}) {
    console.log(state);
    let {title, backdrop_path,vote_average,overview} = state
    return (
        <div className={'movie-wrap'}>
            <div >
                <h2>{title}</h2>
                <p> {vote_average}</p>
                <p>{overview}</p>
                <img src={'https://image.tmdb.org/t/p/w1280' + backdrop_path} alt={title}/>
            </div>
        </div>
    );
}