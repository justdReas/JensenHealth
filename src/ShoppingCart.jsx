import { useStates } from "./utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { empty, remove, save } from "./utilities/shoppingCartLogic";
import { useEffect } from "react";
import { sweFormat } from "./utilities/currencyFormatter";

export default function ShoppingCart() {
  let s = useStates("main");

  let totalSum = s.cartContents.reduce(
    (acc, row) => acc + row.quantity * row.product.price,
    0
  );

  useEffect(() => {
    // Save the cart contents (on quantity changes)
    save();
  });

  return (
    <Container className="ShoppingCart">
      <Row>
        <Col>
          <h1>Inkorg</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {s.cartContents.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Produkter</th>
                  <th className="text-end">Kvantitet</th>
                  <th className="text-end">à</th>
                  <th className="text-end">Sum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {s.cartContents.map((row, i) => (
                  <tr key={i}>
                    <td>{row.product.name}</td>
                    <td className="text-end">
                      <input
                        className="text-end"
                        style={{ width: 50 }}
                        type="number"
                        min={1}
                        max={100}
                        {...row.bind("quantity")}
                      />
                    </td>
                    <td className="text-end" style={{ width: 100 }}>
                      {sweFormat(row.product.price)}
                    </td>
                    <td className="text-end" style={{ width: 100 }}>
                      {sweFormat(row.quantity * row.product.price)}
                    </td>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => remove(row.product)}
                      className="text-center"
                    >
                      🗑️
                    </th>
                  </tr>
                ))}
                <tr className="fw-bold">
                  <th>Summa</th>

                  <th colSpan={4} className="text-end">
                    {sweFormat(totalSum)}
                  </th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>The cart is empty...</p>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="float-end text-decoration-none" to={``}>
            <button type="button" className="btn btn-primary">
              Betala
            </button>
          </Link>
          {s.cartContents.length ? (
            <button
              onClick={empty}
              type="button"
              className="btn btn-primary float-end me-3 bg-danger"
            >
              Töm Korg
            </button>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
}
