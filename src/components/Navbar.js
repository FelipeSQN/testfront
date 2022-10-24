import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className ="name" href="#home">Felipe Avelar</Navbar.Brand>
          <Nav className="ml-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link className ="nav-link" href="#home">Home</Nav.Link>
            <Nav.Link className ="nav-link" href="#About">About</Nav.Link>
            <Nav.Link className ="nav-link" href="#pricing">Contact</Nav.Link>
          </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;