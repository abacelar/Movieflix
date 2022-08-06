import { useContext, useEffect} from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import history from "../../util/history";
import { getTokenData, isAuthenticated, removeAuthData} from "../../util/requests";

import './styles.css';





const Navbar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
      authenticated: true,
      tokenData: getTokenData(),
      });
    }
    else {
      setAuthContextData({
        authenticated: false,
        });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event:  React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
      });
      history.replace('/');
  };

  return (
    <nav className="navbar main-nav">
      {
          authContextData.authenticated ? (
      <NavLink to="/movies" className="nav-logo-text">
        <h4>MovieFlix</h4>
      </NavLink> ) : (<NavLink to="/" className="nav-logo-text">
        <h4>MovieFlix</h4>
      </NavLink> )}
      <div>
        {
          authContextData.authenticated ? (
            <button className="nav-logout">
            <a href="#logout" onClick={handleLogoutClick}>SAIR</a>
            </button>
          ) : (''
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;