import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Chattly</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Pricing</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Downloads
        </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={{
                pathname: "/downloads"
              }}>All</Link>
              <Link className="dropdown-item" to={{
                pathname: "/downloads",
                params: {
                  device: "win"
                }
              }}>Windows</Link>
              <Link className="dropdown-item" to={{
                pathname: "/downloads",
                params: {
                  device: "lin"
                }
              }}>Linux</Link>
              <Link className="dropdown-item" to={{
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