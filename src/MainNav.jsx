import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStates } from "./utilities/states";

import SearchBar from "./SearchBar";

export default function MainNav() {
  // React Router DOM v6 got rid of the NavLink component
  // What is the smartest way to recreate that functionality
  // (adding an active CSS class to the active menu choice)

  let s = useStates("main");

  let totalNumberOfProducts = 0;
  for (let row of s.cartContents) {
    totalNumberOfProducts += row.quantity;
  }

  // let totalNumberOfProducts = s.cartContents.reduce((acc,{quantity}) => quantity + acc, 0);

  return (
    <Navbar fixed="top" className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="col-md-4 text-light">
          <h1>🤗 Jensen Health 🏥 </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="col-md-8">
          <Nav className="ms-auto align-items-center text-center">
            <Link className="nav-link text-white" to="/">
              <i className="fa fa-home"></i>
              Hem
            </Link>
            <Link className="nav-link text-white" to="/produkt-lista">
              <i className="fa fa-shopping-bag"></i>
              Produkter
            </Link>
            <Link className="nav-link text-white" to="/kundvagn">
              <i className="fa fa-cart-arrow-down "></i>
              Kundvagn&nbsp;({totalNumberOfProducts})
            </Link>
            <Link className="nav-link" to="/search"></Link>
            <SearchBar />
            <Link to={`/BackOffice`}>
              <button
                type="button"
                className="btn fa fa-asterisk text-light"
              ></button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}