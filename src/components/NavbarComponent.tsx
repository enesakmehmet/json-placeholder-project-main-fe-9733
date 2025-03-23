import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavbarComponent() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <Navbar expand="lg" className="py-3" style={{
      background: darkMode 
        ? '#1a1a1a' 
        : 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
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
            <div className="d-flex align-items-center ms-2">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
