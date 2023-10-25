import '../styles/nav.css'
import { Outlet, Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/produit">Produit </Link>
        <Link to="/">Panier</Link>
      </nav>
      <Outlet />
    </>
  )
};

export default Nav;
