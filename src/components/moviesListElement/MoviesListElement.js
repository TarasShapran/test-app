export default function MoviesListElement({item}) {
    return (
        <div>
            {
                JSON.stringify(item)
                
            }
            <img src={'https://image.tmdb.org/t/p/w1280/'+item.backdrop_path} alt=""/>

        </div>
    );
}