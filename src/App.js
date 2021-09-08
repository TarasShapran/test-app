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
import LoginForm from "./components/loginForm/LoginForm";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "./styles/useDarkMode";
import {Container} from "@material-ui/core";
import {darkTheme, GlobalStyles, lightTheme} from "./styles/globalStyles";

export default function App() {
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <Container>
                <GlobalStyles/>
                <Router>
                    <div className="App">
                        <Header theme={theme} toggleTheme={toggleTheme} />


                    </div>
                    <Switch>

                        <Route path={'/login'} component={LoginForm}/>
                        <Route path={'/movie-list/:id'} component={MovieInfo}/>
                        <Route path={'/movie-list'} component={MoviesList}/>
                        <Route path={'/'} component={Trending}/>
                    </Switch>
                </Router>
            </Container>
        </ThemeProvider>
    );
}


