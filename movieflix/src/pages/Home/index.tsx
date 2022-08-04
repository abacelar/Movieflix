import { ReactComponent as HomeImage } from '../../assets/images/home.svg';
import Login from './Login';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <HomeImage />
      </div>
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
};

export default Home;