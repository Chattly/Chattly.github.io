import { Link, useLocation } from "react-router-dom";
import logo from "./assets/images/chattly-logos/logo.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/"><img src={logo} alt="Chattly Logo" width="30" height="30" /> Chattly</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/features" ? "active" : ""}`}>
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/tos" ? "active" : ""}`}>
            <Link className="nav-link" to="/tos">ToS</Link>
          </li>
          <li className={`nav-item dropdown ${location.pathname === "/downloads" ? "active" : ""}`}>
            <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Downloads
        </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className={`dropdown-item ${(location.pathname === "/downloads"  && location.params?.device === "all") ? "active" : ""}`} to={{
                pathname: "/downloads",
                params: {
                  device: "all"
                }
              }}>All</Link>
              <Link className={`dropdown-item ${(location.pathname === "/downloads" && location.params?.device === "win") ? "active" : ""}`} to={{
                pathname: "/downloads",
                params: {
                  device: "win"
                }
              }}>Windows</Link>
              <Link className={`dropdown-item ${(location.pathname === "/downloads" && location.params?.device === "lin") ? "active" : ""}`} to={{
                pathname: "/downloads",
                params: {
                  device: "lin"
                }
              }}>Linux</Link>
              <Link className={`dropdown-item ${(location.pathname === "/downloads" && location.params?.device === "mac") ? "active" : ""}`} to={{
                pathname: "/downloads",
                params: {
                  device: "mac"
                }
              }}>Mac</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar">
    //   <h1>Chattly Nav</h1>
    //   <div className="links">
    //     <Link to="/">Home</Link>
    //     <Link to="/downloads">Downloads</Link>
    //   </div>
    // </nav>
  );
}

export default Navbar;