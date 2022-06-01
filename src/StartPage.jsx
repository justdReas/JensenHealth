import imgA from "./img/mo.jpg";
import imgB from "./img/en.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function StartPage() {
  const home = "Välkommen! ";
  const showHome = true;

  if (showHome) {
    return (
      <Container className="StartPage">
        <Row>
          <Link className="link-dark text-decoration-none" to="/produkt-lista">
            <h1>{home}</h1>
            <h2>
              {" "}
              <br />
              Svensk Hälsokost & speciella vitaminer för IT- studenter och
              utvecklare!
            </h2>
            <br />
            <Row className="pb-5">
              <Col>
                <img
                  src={imgA}
                  width="80%"
                  // height="350px"
                ></img>
              </Col>
              <Col>
                <img
                  src={imgB}
                  width="80%"
                  // height="350px"
                ></img>
              </Col>
            </Row>
          </Link>
        </Row>
      </Container>
    );
  } else {
    return <p>empty</p>;
  }
}
