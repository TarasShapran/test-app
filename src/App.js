import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function App() {

    return (
        <Router>
            <div className="App">
                {/*<Route path={'/header'} component={Header}/>*/}
                {/*<Route path={'/movie-list'} component={MoviesList}/>*/}
                {/*<Route path={'/movie-details'} component={MoviesList}/>*/}

                <Header/>
                <MoviesList/>

            </div>
        </Router>
    );
}


