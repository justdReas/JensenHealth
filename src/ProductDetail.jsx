import { useStates } from "./utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { add } from "./utilities/shoppingCartLogic";
import { sweFormat } from "./utilities/currencyFormatter";
import { useEffect } from "react";
import { missingImage } from "./utilities/handleMissingImage";

export default function ProductDetail() {
  let s = useStates("main");

  // A local state for this component
  // with one property/state var - buyQuantity
  let localState = useStates({
    buyQuantity: 1,
  });

  // Set the buyQuantity to 1 when the component mounts / "page load"
  useEffect(() => {
    localState.buyQuantity = 1;
  }, []);

  let navigate = useNavigate();

  // Find the product
  let { id } = useParams();
  let product = s.allProducts.find((x) => x.id === +id);
  if (!product) {
    return null;
  }

  let { name, description, price, categoryId } = product;

  // Find the category
  let categoryName =
    s.categories.find((category) => category.id === categoryId)?.name || "none";

  function buy() {
    // Add the product to the cart
    add(product, localState.buyQuantity);
    // Show the cart
    // navigate("/shopping-cart");
  }

  return (
    <Container className="productList">
      <Row>
        <Col>
          <Link to={`/produkt-lista`}>
            <button type="button" className="my-4 btn btn-primary">
              Tillbaka till listan
            </button>
            <hr />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="mb-2">{name}</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h5>Kategori: {categoryName}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            onError={(event) => missingImage(event, name)}
            className="float-end ms-3"
            style={{ width: 250, height: 150, objectFit: "cover" }}
            src={`/images/products/${id}.jpg`}
          />
    
          <p>{description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Pris: {sweFormat(price)}</p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <button
            type="button"
            onClick={buy}
            className="btn btn-primary float-end"
          >
            Köp
          </button>
          <input
            style={{ width: 100 }}
            className="float-end mt-1 me-3"
            type="number"
            min="1"
            {...localState.bind("buyQuantity")}
          />
        </Col>
      </Row>
    </Container>
  );
}
