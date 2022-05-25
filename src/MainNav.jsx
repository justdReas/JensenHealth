import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useStates} from './utilities/states';

import SearchBar from "./SearchBar";

export default function MainNav() {
  // React Router DOM v6 got rid of the NavLink component
  // What is the smartest way to recreate that functionality
  // (adding an active CSS class to the active menu choice)

  let s = useStates('main');

  let totalNumberOfProducts = 0;
  for(let row of s.cartContents){
    totalNumberOfProducts += row.quantity;
  }

  // let totalNumberOfProducts = s.cartContents.reduce((acc,{quantity}) => quantity + acc, 0);

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
              <i className="fa fa-home"></i>
              Hem
            </Link>
            <Link className="nav-link" to="/product-list">
              <i className="fa fa-shopping-bag"></i>
              Produkter
            </Link>
            <Link className="nav-link" to="/shopping-cart">
              <i className="fa fa-cart-arrow-down blue-color"></i>
              Kundvagn&nbsp;({totalNumberOfProducts})
            </Link>
            <Link className="nav-link" to="/search">
            </Link>
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