import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../style/MyNavbar.css";

function MyNavbar() {
    return (
        <Navbar sticky="top" expand="lg" className="custom-navbar">
            <Container>
            <Navbar.Brand as={Link} to="/" className="brand-text me-auto">Rain Sun</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="nav-text ms-auto"> {/* 'ms-auto' pushes links to right */}
                    <Nav.Link as={Link} to="/" className="nav-item-spacing">Home</Nav.Link>
                    {/* 
                    <Nav.Link as={Link} to="/projects" className="nav-item-spacing">CS Projects</Nav.Link>
                    */}
                    <Nav.Link as={Link} to="/photography" className="nav-item-spacing">Photography</Nav.Link>
                </Nav>
            {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default MyNavbar;