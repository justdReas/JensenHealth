
// import { useStates } from "./utilities/states";
// import { Container, Row, Col } from "react-bootstrap";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import CategorySelect from "./CategorySelect";

// export default function ProductDetail() {
//   let s = useStates("main");
//   let { id } = useParams();
//   let navigate = useNavigate();

//   let product = s.products.find((x) => x.id === +id);
//   if (!product) {
//     return null;
//   }
//   let { name, description, price } = product;

//   async function save() {
//     // Save to db
//     await product.save();
//     // Navigate to detail page
//     navigate(`/backoffice/`);
//   }

//   return (
//     <Container className="productList">
//       <Row>
//         <Col>
//           <Link to={`/BackOffice`}>
//             <button type="button" className="my-4 btn btn-primary">
//               Tillbaka till listan
//             </button>
//             <hr />
//           </Link>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h1>{name}</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//         <img
//           onError={(event) => missingImage(event, name)}
//           className="float-end ms-3"
//           style={{ width: 250, height: 150, objectFit: "cover" }}
//           src={`/images/products/${id}.jpg`}
//           />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <p>{description}</p>
//         </Col>
//       </Row>
//               <Col xxl="12">
//                 <img
//                   onError={(event) => missingImage(event, name)}
//                   className="float-end ms-3"
//                   style={{ width: 250, height: 150, objectFit: "cover" }}
//                   src={`/images/products/${id}.jpg`}
//                 />
//                 <p>{description}</p>
//               </Col>
//               <Col xxl="12"></Col>
//       <Row>
//         <Col>
//           <p>Price: {price} sek</p>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           <label>
//             Kategori:&nbsp;
//             <CategorySelect bindTo={[product, "categoryId"]} />
//           </label>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <label className="mt-3">
//             Namn:
//             <input className="form-control" {...product.bind("name")} />
//           </label>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <label className="mt-3">
//             Beskrivning:
//             <textarea
//               className="form-control"
//               {...product.bind("description")}
//             />
//           </label>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <label className="mt-3">
//             Pris:
//             <input
//               type="number"
//               className="form-control"
//               {...product.bind("price")}
//             />
//           </label>
//         </Col>
//       </Row>
//       <button
//         type="button"
//         onClick={save}
//         className="my-4 btn btn-primary float-end"
//       >
//         Spara
//       </button>
//     </Container>
//   );
// }

import { useStates } from "./utilities/states";
import { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { scrollRestore } from "./utilities/scrollBehavior";
import CategorySelect from "./CategorySelect";
import { sweFormat } from "./utilities/currencyFormatter";
import { missingImage } from "./utilities/handleMissingImage";

export default function BackOffice() {
  scrollRestore();

  let s = useStates("main");
  let navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("sortera");

  function showEdit(id) {
    navigate(`/BackOffice/${id}`);
  }
  function newProduct() {
    navigate(`/BackOffice/new`);
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
      <Row>
        <Col>
          <Button onClick={() => newProduct()}>Lägg till ny product</Button>
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
    </Container>
  );
}





