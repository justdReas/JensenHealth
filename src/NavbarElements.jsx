import React from 'React';
import {Navbar, Container, Nav, NavDropdown, InputGroup, FormControl, Button} from 'react-bootstrap'

const NavbarElements = () => {
  return (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">🤗Jensen Health 🏥 </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/list">ProductList</Nav.Link>
        <Nav.Link href="/product-edit/:id">ProductEdit</Nav.Link>
      <Nav.Link href="/shopping-cart">ShoppingCart</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/product-detail/:id">ProductDetatil</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Kampanjer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Inspiration</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  <InputGroup className="mb-3">
    <Button variant="outline-secondary" id="button-addon1">
      Search
    </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

    <Nav>
      <Nav.Link href="#deets">Kundservice</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Mina sidor

      </Nav.Link>
    </Nav>

  </Navbar.Collapse>
  </Container>

</Navbar>

  )
}

export default NavbarElements;