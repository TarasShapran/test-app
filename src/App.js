import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";



export default function App() {

    return (
        <div className="App">
            <Header/>
            <MoviesList/>

        </div>
    );
}


