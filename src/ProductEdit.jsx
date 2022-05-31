import { useStates } from "./utilities/states";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import { sweFormat } from "./utilities/currencyFormatter";
import { initializeMedia, captureImage, uploadImage } from './utilities/imageCapture';
import { useState } from 'react';
import { missingImage } from "./utilities/handleMissingImage";


export default function ProductDetail() {
  let s = useStates("main");
  let { id } = useParams();
  let navigate = useNavigate();

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
  }

  function takeImage() {
    captureImage();
    l.captureMode = false;
  }

  return (
    <Container className="productList">
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
    </Container>
  );
}