import { Switch, Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import ReviewsComponent from './pages/Reviews';
import history from './util/history';


const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:moviesId">
        <ReviewsComponent />
      </Route>
    </Switch>
  </Router>
);

export default Routes;