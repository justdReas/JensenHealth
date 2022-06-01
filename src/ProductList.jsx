import { useStates } from "./utilities/states";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scrollRestore } from "./utilities/scrollBehavior";
import CategorySelect from "./CategorySelect";
import { sweFormat } from "./utilities/currencyFormatter";
import { missingImage } from "./utilities/handleMissingImage";
import "../scss/style.scss";

export default function ProductList() {
  scrollRestore();

  let s = useStates("main");
  let navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("sortera");

  function showDetail(id) {
    navigate(`/produkt-detalj/${id}`);
  }

  return (
    <Container className="productList">
      <Row>
        <Col>
          <h1>Produkter</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          Kategorier:{" "}
          <CategorySelect showAllOption bindTo={[s, "chosenCategoryId"]} />
        </Col>
        <Col>
          Sortera:{" "}
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="alla">Alla</option>
            <option value="nameAsc">Namn, stigande</option>
            <option value="nameDesc">Namn, fallande</option>
            <option value="priceAsc">Pris, stigande</option>
            <option value="priceDesc">Pris, fallande</option>
          </select>
        </Col>
      </Row>
      {s.products
        .filter(
          (product) =>
            s.chosenCategoryId === 0 /*all*/ ||
            s.chosenCategoryId === product.categoryId
        )
        .sort((a, b) => {
          if (sortOrder === "alla") {
          }
          if (sortOrder === "nameAsc") {
            return a.name > b.name ? 1 : -1;
          }
          if (sortOrder === "nameDesc") {
            return a.name < b.name ? 1 : -1;
          }
          if (sortOrder === "priceAsc") {
            return a.price > b.price ? 1 : -1;
          }
          if (sortOrder === "priceDesc") {
            return a.price < b.price ? 1 : -1;
          }
        })
        .map(({ id, name, description, price }) => (
          <Row className="product" key={id} onClick={() => showDetail(id)}>
            <div className="card-custom">
              <Col xxl="12">
                <h3>{name}</h3>
              </Col>
              <Row className="bg-light">
                <img
                  className="img-fluid row align-start"
                  onError={(event) => missingImage(event, name)}
                  style={{ width: 250, objectFit: "cover" }}
                  src={`/images/products/${id}.jpg`}
                />

                <Col>
                  <p>{description}</p>
                  <Col className="text-end bottom-column">
                    <h4>
                      <b>Pris:</b> {sweFormat(price)}
                    </h4>
                  </Col>
                </Col>
              </Row>
            </div>
          </Row>
        ))}
    </Container>
  );
}
