import '../styles/nav.css'
import { Outlet, Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">ASOSO</Link>
          </li>
          <li>
            <Link to="/produit">Produit </Link>
          </li>
        
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;
