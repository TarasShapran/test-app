import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getGenres} from "../../service/movieService";
import {add_Genres, chose_Genres, get_Genres} from "../../redux/action/action";
import Genre from "../genre/Genre";
import '../genre/Genre.css'
import {Chip} from "@material-ui/core";

export default function Filter({selectedGenres, setSelectedGenres,year,setYear}) {
    let {genres} = useSelector(({filterReducer}) => filterReducer);
    let dispatch = useDispatch();
    let [yearInp,setYearInp]=useState('');


    const handleAdd = (item) => {
        setSelectedGenres([...selectedGenres, item])
        dispatch(chose_Genres(item))

    }
    const handleRemove = (genre) => {
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


    let onChangeYear=(e)=>{
        e.preventDefault()
        setYearInp(e.target.value);
    };
    let onSaveYear=(e)=>{
        e.preventDefault()
        setYear(yearInp)
    };
    return (
        <div className={"filterWrap"}>
            <div className={'genre-wrap'}>
                {
                    selectedGenres && selectedGenres
                        .map(value =>
                            <Chip
                                style={{margin: 2}}
                                className={'chipComp'}
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
                        style={{margin: 2}}
                        className={'chipComp'}
                        label={value.name}
                        clickable
                        size={'small'}
                        key={value.id}
                        onClick={() => handleAdd(value)}

                    />)
                }


            < /div>
            <div className="choseYear">
                <form onSubmit={onSaveYear}>
                    <input className={'setYear'}
                           type="number"
                           value={yearInp}
                           onChange={onChangeYear}
                            placeholder={"Enter Year"}
                    />
                </form>
            </div>
            
        </div>
    );
}