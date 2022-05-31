import { useStates } from "./utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import { sweFormat } from "./utilities/currencyFormatter";
import { factory } from "./utilities/FetchHelper";

const { Product } = factory;

export default function ProductNew() {
  let s = useStates({
    product: new Product({
      name: "",
      description: "",
      price: "",
      categoryId: 1,
    }),
  });
  let globals = useStates("main");
  let navigate = useNavigate();

  let { name, description, price } = s.product;

  async function save() {
    // Save to db
    await s.product.save();
    globals.products.push(s.product);
    // Navigate to detail page
    navigate(`/backoffice/`);
  }

  return (
    <Container className="productList">
      <h1>Test</h1>
      <Row>
        <Col>
          <Link to={`/BackOffice`}>
            <button type="button" className="my-4 btn btn-primary">
              Tillbaka till listan
            </button>
            <hr />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            onError={(event) => missingImage(event, name)}
            className="float-end ms-3"
            style={{ width: 250, height: 150, objectFit: "cover" }}
            /* src={`/images/products/${id}.jpg`} */
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
      <Col xxl="12"></Col>
      <Row>
        <Col>
          <p>Pris: {sweFormat(price)} sek</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <label>
            Kategori:&nbsp;
            <CategorySelect bindTo={[s.product, "categoryId"]} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Namn:
            <input className="form-control" {...s.product.bind("name")} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Beskrivning:
            <textarea
              className="form-control"
              {...s.product.bind("description")}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Pris:
            <input
              type="number"
              className="form-control"
              {...s.product.bind("price")}
            />
          </label>
        </Col>
      </Row>
      <button
        type="button"
        onClick={save}
        className="my-4 btn btn-primary float-end"
      >
        Spara
      </button>
    </Container>
  );
}
