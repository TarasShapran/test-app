import './MovieInfo.css'

export default function MovieInfo({location: {state}}) {
    let {title, backdrop_path, tagline, overview, name, first_air_date, release_date} = state

    return (
        <div className={'movie-wrap'}>
            <div className={'movie-wrap-s'}>

                <img className={'content_Img'} src={'https://image.tmdb.org/t/p/w1280' + backdrop_path}
                     alt={title || name}/>


                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {name || title} (
                      {(
                          first_air_date ||
                          release_date ||
                          "-----"
                      ).substring(0, 4)}
                      )
                  </span>
                    {tagline && (
                        <i className="tagline">{tagline}</i>
                    )}

                    <span className="ContentModal__description">
                    {overview}
                  </span>

                </div>
            </div>
        </div>
    );
}