import { useStates } from "./utilities/states";
import { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scrollRestore } from "./utilities/scrollBehavior";
import CategorySelect from "./CategorySelect";
import { sweFormat } from "./utilities/currencyFormatter";
<<<<<<< HEAD
import { missingImage } from "./utilities/handleMissingImage";

export default function BackOffice() {
  scrollRestore();
=======
import { initializeMedia, captureImage, uploadImage } from './utilities/imageCapture';
import { useState } from 'react';
import { missingImage } from "./utilities/handleMissingImage";

>>>>>>> c8fc9a6e472304fc765d8794da4dbc4537ddf8d9

  let s = useStates("main");
  let navigate = useNavigate();

<<<<<<< HEAD
  const [sortOrder, setSortOrder] = useState("sortera");

  function showEdit(id) {
    navigate(`/BackOffice/${id}`);
  }
  function newProduct() {
    navigate(`/BackOffice/new`);
=======
  // a local state only for this component
  let l = useStates({
    captureMode: true,
    replaceImage: false
  });

  // initialize media (start talking to camera)
  // when the component loads
  useState(() => {
    initializeMedia();
  }, []);

  let product = s.products.find((x) => x.id === +id);
  if (!product) {
    return null;
  }
  let { name, description, price } = product;

  async function save() {
    // Save to db
    await product.save();
    // Upload image if the image should be replaced
    l.replaceImage && await uploadImage(id);
    // Navigate to detail page
    navigate(`/product-detail/${id}`);
  
    // Navigate to detail page
    navigate(`/backoffice/`);
>>>>>>> c8fc9a6e472304fc765d8794da4dbc4537ddf8d9
  }

  function takeImage() {
    captureImage();
    l.captureMode = false;
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
          <CategorySelect showAllOption bindTo={[s, "chosenCategoryId"]} />
        </Col>
        <Col>
<<<<<<< HEAD
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
=======
          <img
            onError={(event) => missingImage(event, name)}
            className="float-end ms-3"
            style={{ width: 250, height: 150, objectFit: "cover" }}
            src={`/images/products/${id}.jpg`}
          />
          
          <Container className="product-edit">
      {/* Online */}
      {l.replaceImage ?
        <Row><Col>
          <video style={{ display: l.captureMode ? 'block' : 'none' }} autoPlay></video>
          <canvas width="320" height="240" style={{ display: !l.captureMode ? 'block' : 'none' }}></canvas>
          <button className="btn btn-primary mt-3 mb-5" onClick={takeImage}>Capture</button>
        </Col></Row> : <Row><Col>
          <img src={`/images/products/${id}.jpg`} />
          <button className="btn btn-primary mt-3 mb-5" onClick={() => l.replaceImage = true}>Replace image</button>
        </Col></Row>}
      
      <button type="button" onClick={save} className="my-4 btn btn-primary float-end">Save</button>
    </Container>

>>>>>>> c8fc9a6e472304fc765d8794da4dbc4537ddf8d9
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => newProduct()}>Lägg till ny product</Button>
        </Col>
      </Row>
<<<<<<< HEAD
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
          <Row className="product" key={id} onClick={() => showEdit(id)}>
            <Card>
              <Col xxl="12">
                <h3>{name}</h3>
                <img
                  onError={(event) => missingImage(event, name)}
                  className="float-end ms-3"
                  style={{ width: 250, height: 150, objectFit: "cover" }}
                  src={`/images/products/${id}.jpg`}
                />
                <p>{description}</p>
              </Col>
              <Col xxl="12">
                <p>
                  <b>Pris:</b> {sweFormat(price)}
                </p>
              </Col>
            </Card>
          </Row>
        ))}
=======
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
            <CategorySelect bindTo={[product, "categoryId"]} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Namn:
            <input className="form-control" {...product.bind("name")} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="mt-3">
            Beskrivning:
            <textarea
              className="form-control"
              {...product.bind("description")}
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
              currency="SWE"
              className="form-control"
              {...product.bind("price")}
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
>>>>>>> c8fc9a6e472304fc765d8794da4dbc4537ddf8d9
    </Container>
  );
}