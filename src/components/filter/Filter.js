import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getGenres} from "../../service/movieService";
import {add_Genres, chose_Genres, get_Genres} from "../../redux/action/action";
import '../genre/Genre.css'
import {Chip} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Filter({selectedGenres, setSelectedGenres, year, setYear, rate, setRate}) {

    const classes = useStyles();


    const handleChange = (event) => {
        setRate(event.target.value);
    };


    console.log(rate)


    let {genres} = useSelector(({filterReducer}) => filterReducer);
    let dispatch = useDispatch();
    let [yearInp, setYearInp] = useState('');


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


    let onChangeYear = (e) => {
        e.preventDefault()
        setYearInp(e.target.value);
    };
    let onSaveYear = (e) => {
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
            <div>
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
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rate}
                            onChange={handleChange}
                        >
                            <MenuItem value={''}>All</MenuItem>
                            <MenuItem value={9}>nine</MenuItem>
                            <MenuItem value={8}>eight</MenuItem>
                            <MenuItem value={7}>seven</MenuItem>
                            <MenuItem value={6}>six</MenuItem>
                            <MenuItem value={5}>five</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}