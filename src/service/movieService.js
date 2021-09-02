import axios from "axios";

let url = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhYWVhYjk1NmJkYjk3NWQzMWQ3NDJlZDdiM2NmYSIsInN1YiI6IjYxMmY1OTFlYWY1OGNiMDA0MjQ5MWRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kBlmLG_cmYxeHeh3P-pwZ0Tfbls7taV9eycLo-zHpw8'
    }

}
let axiosInstance = axios.create(url);

const getDiscoverMovies = async () => await axiosInstance.get('/discover/movie')
const getDiscoverMovieById = async (id) => await axiosInstance.get('/movie/'+id)
const searchMovieByName = async (name) => await axiosInstance.get('/search/movie?query=' + name)

export {getDiscoverMovies, searchMovieByName,getDiscoverMovieById}