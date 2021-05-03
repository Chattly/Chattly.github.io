import { Link } from "react-router-dom";
import logo from "./assets/images/chattly-logos/logo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const ChattlyNavbar = () => {
  // const location = useLocation();
  return (

    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" ><img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} Chattly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/features">Features</Nav.Link>
          <NavDropdown title="Downloads" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={{
              pathname: "/downloads",
              params: {
                device: "all"
              }
            }}>All</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={{
              pathname: "/downloads",
              params: {
                device: "win"
              }
            }}>Windows</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={{
              pathname: "/downloads",
              params: {
                device: "lin"
              }
            }}>Linux</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={{
              pathname: "/downloads",
              params: {
                device: "mac"
              }
            }}>Mac</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ChattlyNavbar;