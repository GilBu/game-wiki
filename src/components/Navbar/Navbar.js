import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Game <span className="text-primary">Wiki</span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true" ] .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/games" className="nav-link">
              Games
            </NavLink>
            <NavLink to="/creators" className="nav-link">
              Creators
            </NavLink>
            <NavLink to="developers" className="nav-link">
              Developers
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;