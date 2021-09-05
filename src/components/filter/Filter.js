import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getGenres} from "../../service/movieService";
import {add_Genres, chose_Genres, get_Genres} from "../../redux/action/action";
import Genre from "../genre/Genre";
import '../genre/Genre.css'
import {Chip} from "@material-ui/core";

export default function Filter({selectedGenres, setSelectedGenres}) {
    let {genres} = useSelector(({filterReducer}) => filterReducer);
    let dispatch = useDispatch();


    const handleAdd = (item) => {
        setSelectedGenres([...selectedGenres, item])
        dispatch(chose_Genres(item))

    }
    const handleRemove = (genre) => {
        console.log(genre)
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        dispatch(add_Genres(genre))

    };

    useEffect(() => {
        getGenres().then(({data: {genres}}) => {

                return dispatch(get_Genres(genres))
            }
        )
    }, [])


    return (
        <div className={'genre-wrap'}>
            {
                selectedGenres && selectedGenres
                    .map(value =>
                        <Chip
                            label={value.name}
                            clickable
                            size={'small'}
                            key={value.id}
                            color={'primary'}
                            onDelete={() => handleRemove(value)}
                        />)
            }

            {
                genres && genres.map(value => <Chip
                    label={value.name}
                    clickable
                    size={'small'}
                    key={value.id}
                    onClick={() => handleAdd(value)}

                />)
            }


        < /div>
    );
}