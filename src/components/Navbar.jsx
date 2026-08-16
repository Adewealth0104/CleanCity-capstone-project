import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="navbar-clean sticky-top">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" end>
          CleanCity<span className="text-success">+</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="clean-nav" />
        <BootstrapNavbar.Collapse id="clean-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/waste-categories">Waste Categories</Nav.Link>
            <Nav.Link as={NavLink} to="/tracker">Tracker</Nav.Link>
            <Nav.Link as={NavLink} to="/pledge">Pledge</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
