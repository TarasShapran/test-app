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
import MovieInfo from "./components/movieInfo/MovieInfo";
import Trending from "./components/trending/Trending";
import './App.css'

export default function App() {

    return (
        <Router>
            <div className="App">
                <Header/>


            </div>
            <Switch>

                <Route path={'/movie-list/:id'} component={MovieInfo}/>
                <Route path={'/movie-list'} component={MoviesList}/>
                <Route path={'/'} component={Trending}/>
            </Switch>
        </Router>
    );
}


