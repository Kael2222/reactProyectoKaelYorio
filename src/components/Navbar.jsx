import CartWidget from "./CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';



const Navbar = ({isInHeader}) => {


  return (
    <nav className="navbar">
        <h1>
          <NavLink className="links" to="/"> TIENDA DE DISCOS</NavLink> 
        </h1>
        <ul>
          <NavLink className="links" to="/categoria/Internacional"> Internacional</NavLink>
          <NavLink className="links" to="/categoria/Nacional">Nacional</NavLink>
          <NavLink className="links" to="/contacto">Contacto</NavLink>
        </ul>
        {isInHeader && 
        <Link to="/cart">
          <CartWidget/>
        </Link>}
    </nav>
  )
}
        

export default Navbar;
