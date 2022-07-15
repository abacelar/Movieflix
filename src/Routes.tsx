import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:moviesId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
