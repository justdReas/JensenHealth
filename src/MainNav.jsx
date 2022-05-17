import { Container, Navbar, Nav,InputGroup, FormControl, Button  } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function MainNav() {

  // React Router DOM v6 got rid of the NavLink component
  // What is the smartest way to recreate that functionality
  // (adding an active CSS class to the active menu choice)

  return <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
    <Container>
      <Navbar.Brand href="#home">🤗Jensen Health 🏥 </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/product-list">Product List</Link>
          <Link className="nav-link" to="/shopping-cart">Shopping Cart</Link>

      

        <InputGroup className="mb-3">
    <Button variant="outline-secondary" id="button-addon1">
      Search<kbd></kbd>
    </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
   
      <Nav.Link href="#deets">KundService</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        MinaSidor

          <i class='fa fa-cart-arrow-down blue-color'></i>
      </Nav.Link>
 


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}