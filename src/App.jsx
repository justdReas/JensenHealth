import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useStates } from "./utilities/states";
import { factory } from "./utilities/FetchHelper";
import { init } from "./utilities/shoppingCartLogic";
import "./utilities/scrollBehavior";

import MainNav from "./MainNav";
import StartPage from "./StartPage";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ProductEdit from "./ProductEdit";
import ProductNew from "./ProductNew";

import ShoppingCart from "./ShoppingCart";
import BackOffice from "./BackOffice";

// Create classes used for fetching from the REST-api
const { Product, Categorie: Category } = factory;

let oldSearchTerm = "";

export default function App() {
  let s = useStates("main", {
    allProducts: [],
    products: [], // products filtered by search term
    categories: [],
    chosenCategoryId: 0,
    cartContents: [],
    searchTerm: "",
  });

  useEffect(() => {
    (async () => {
      // get the categories from the db
      s.categories = await Category.find();
      // get the products from the db
      s.products = await Product.find();
      s.allProducts = s.products.slice();
      // initilize the shopping cart
      // (this provides local storage of cartContents)
      init(s, "cartContents");
    })();
  }, []);

  // Filtering
  useEffect(() => {
    // Prevent endless loop, do nothing if
    // the search term has not changed
    if (s.searchTerm === oldSearchTerm) {
      return;
    }
    oldSearchTerm = s.searchTerm;
    // search / filter
    s.products = s.allProducts.filter((x) =>
      x.name.toLowerCase().includes((s.searchTerm + "").toLowerCase())
    );
  }, [s]);

  return s.allProducts.length === 0 ? null : (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/produkt-lista" element={<ProductList />} />
        <Route path="/produkt-detalj/:id" element={<ProductDetail />} />
        <Route path="/BackOffice/:id" element={<ProductEdit />} />
        <Route path="/BackOffice/new" element={<ProductNew />} />
        <Route path="/kundvagn" element={<ShoppingCart />} />

        <Route path="/BackOffice" element={<BackOffice />} />
      </Routes>
    </Router>
  );
}
