import {
  Container,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainNav() {
  // React Router DOM v6 got rid of the NavLink component
  // What is the smartest way to recreate that functionality
  // (adding an active CSS class to the active menu choice)

  const onChange = ( e, {value}) => {
    const searchText = value.trim().replace(/" "/g, "");

    searchProducts(searchText)(dispatch);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">
          <h1>🤗Jensen Health 🏥 </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Hem
            </Link>
            <Link className="nav-link" to="/product-list">
              Produkt Lista
            </Link>
            <Link className="nav-link" to="/shopping-cart">
              <i class="fa fa-cart-arrow-down blue-color"></i>
              Inkorg
            </Link>
            <Link className="nav-link" to="/search">
              Sök_Produkter
            </Link>


            <InputGroup className="mb-3">
              <Button placeholder= "Search" onChange={onChange} variant="outline-secondary" id="button-addon1 placeholder">
                Search
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup> 
            <Nav.Link href="#deets">Om Oss</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              FnQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}