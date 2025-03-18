import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="py-3" style={{
      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
      boxShadow: 'var(--box-shadow)'
    }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <i className="fas fa-database me-2"></i>
          <span className="fw-bold text-white">JSON Placeholder</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white mx-2 nav-link-custom">
              <i className="fas fa-home me-1"></i> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Users" className="text-white mx-2 nav-link-custom">
              <i className="fas fa-users me-1"></i> Users
            </Nav.Link>
            <Nav.Link as={Link} to="/Favorites" className="text-white mx-2 nav-link-custom">
              <i className="fas fa-star me-1"></i> Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
