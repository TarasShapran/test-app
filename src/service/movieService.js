import axios from "axios";

let url = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhYWVhYjk1NmJkYjk3NWQzMWQ3NDJlZDdiM2NmYSIsInN1YiI6IjYxMmY1OTFlYWY1OGNiMDA0MjQ5MWRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kBlmLG_cmYxeHeh3P-pwZ0Tfbls7taV9eycLo-zHpw8'
    }

}
let axiosInstance = axios.create(url);

const getDiscoverMovies = async (page,genres,year,vote_average) => await axiosInstance.get(`/discover/movie?page=${page}&with_genres=${genres}&year=${year}&vote_average.gte=${vote_average}`)
const getDiscoverMovieById = async (id) => await axiosInstance.get('/movie/' + id)
const searchMovieByName = async (name) => await axiosInstance.get('/search/movie?query=' + name)
const getGenres = async () => await axiosInstance.get('/genre/movie/list')
const getTrending = async (page) => await axiosInstance.get(`/trending/all/week?page=${page}`)
const getPopularMovie = async () => await axiosInstance.get('/genre/movie/list/sort_by')
export {getDiscoverMovies, searchMovieByName, getDiscoverMovieById, getGenres, getTrending}