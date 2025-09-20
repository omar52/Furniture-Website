import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Newhome
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Furniture
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                contact us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <a className="login">
              login
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
