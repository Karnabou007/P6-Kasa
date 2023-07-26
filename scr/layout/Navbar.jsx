import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-kasa.svg";
import "../styles/_Navbar.scss";

function Navbar() {
    return (
      <header>
        <Link to="/" ><img src={logo} alt="Logo Kasa" className="logo" /></Link>
        <nav>
          <NavLink to="/" >Accueil</NavLink>
          <NavLink to="/about" >À propos</NavLink>
        </nav>
      </header>
    )
  }
  
  export default Navbar;