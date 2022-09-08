import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
     
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Traveler</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Compose">Compose</Nav.Link>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="/BlogArchive">Blog Archive</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>


     
 </Navbar>
 
 
  );
}

export default Header;