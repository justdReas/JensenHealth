import imgA from "./img/mo.jpg";
import imgB from "./img/en.jpg";
import { Link } from "react-router-dom";

export default function StartPage() {
  const home = "Välkommen! ";
  const showHome = true;

  if (showHome) {
    return (
      <div className="home">
        <Link className="text-decoration-none" to="/produkt-lista">
          <h3>StartSida</h3>
          <h1>{home}</h1>
          <h2>
            {" "}
            Svensk Hälsokost & speciella vitaminer för IT- studenter och
            utvecklare!
          </h2>
          <img
            style={{ marginTop: "100px" }}
            src={imgA}
            width="500px"
            height="350px"
          ></img>
          <img
            style={{ marginLeft: "20px", marginTop: "100px" }}
            src={imgB}
            width="500px"
            height="350px"
          ></img>
        </Link>
      </div>
    );
  } else {
    return <p>empty</p>;
  }
}
