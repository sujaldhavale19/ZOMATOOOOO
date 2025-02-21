import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.css"

const nav = () => {
  return (
    <Navbar class = "nav-bg m-auto" variant="dark" expand="lg" >
          <Nav className="ms-3">
            <div className = "nav-container m-auto">
              <Nav.Link as={Link} to="/signUp">
                <i className="bi bi-cart-fill"></i> SignUp
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <i className="bi bi-person-circle"></i> Login
              </Nav.Link>
            </div>
          </Nav>
    </Navbar>
  );
}

export default nav;