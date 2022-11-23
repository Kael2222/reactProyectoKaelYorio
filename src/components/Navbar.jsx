import CartWidget from "./CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';
import { baseDeDatos } from "../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";




const Navbar = ({isInHeader}) => {

  const [categorias, setCategorias] = useState([])
  const categoriasRef = collection(baseDeDatos, 'Categorias')
  
  useEffect(() => {
    getDocs(categoriasRef)
      .then(res => {
          setCategorias(res.docs.map(categoria => { return {id: categoria.id, ...categoria.data()}}));
      })
      .catch( errorMessage => {
          console.error(errorMessage);
      })
      
  }, []);

  return (
    <nav className="navbar">
        <h1>
          <NavLink className="links" to="/"> TIENDA DE DISCOS</NavLink> 
        </h1>
        <ul>
          {categorias.map (categoria => { 
            return <Link key={categoria.id} className={`links ${categoria.disabled? "disabled":''}`} to={`/categoria/${categoria.title}`}>{categoria.title}</Link>
          })}
        </ul>
        {isInHeader && 
        <Link to="/cart">
          <CartWidget/>
        </Link>}
    </nav>
  )
}
        

export default Navbar;


/*


<Link className="links" to="/categoria/Internacional"> Internacional</Link>
          <Link className="links" to="/categoria/Nacional">Nacional</Link>
          <Link className="links disabled" to="/contacto">Contacto</Link>


*/