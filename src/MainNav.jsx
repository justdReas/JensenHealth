import {
  Container,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

export default function MainNav() {
  // React Router DOM v6 got rid of the NavLink component
  // What is the smartest way to recreate that functionality
  // (adding an active CSS class to the active menu choice)

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="col-md-4">
          <h1>🤗Jensen Health 🏥 </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="col-md-8">
          <Nav className="ms-auto align-items-center text-center">
            <Link className="nav-link" to="/">
              Hem
            </Link>
            <Link className="nav-link" to="/product-list">
              Produkt Lista
            </Link>
            <Link className="nav-link" to="/shopping-cart">
              <i className="fa fa-cart-arrow-down blue-color"></i>
              Inkorg
            </Link>
            {/* <Link className="nav-link" to="/search">
              Sök_Produkter
            </Link> */}

            <SearchBar />

            <Nav.Link href="#deets">Om Oss</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              FnQ
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
