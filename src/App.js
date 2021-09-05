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
import Filter from "./components/filter/Filter";

export default function App() {

    return (
        <Router>
            <div className="App">
                <Header/>


            </div>
            <Switch>
                {/*<Route path={'/header'} component={Header}/>*/}
                <Route path={'/movie-list/:id'} component={MovieInfo}/>
                <Route path={'/movie-list'} component={MoviesList}/>
            </Switch>
        </Router>
    );
}


