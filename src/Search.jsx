import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductData from "./ProductData";

const Search = () => {
<<<<<<< HEAD
const [filter, setFilter] = useState("");

const searchText = (e) => {
    setFilter(e.target.value);
    };
  // console.warn(filter);

    let dataSearch = ProductData.productData.filter((item) => {
    return Object.keys(item).some((key) =>
    item[key]
=======
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };
  // console.warn(filter);

  let dataSearch = ProductData.productData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
>>>>>>> 4d842f6a2f49850d06f5e5c79a470194ffe0e5e3
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
<<<<<<< HEAD
});

return (
    <>
    <h1 className="text-center text-info">Jensen Health</h1>

    <section className="py-4 container">
        <div className="row justify-content-center">
        <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto">
            <label className="form-label h4">Sök Produkt!</label>
            <input
=======
  });

  return (
    <>
      <h1 className="text-center text-info">Jensen Health</h1>

      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <div className="mb-3 col-4 mx-auto">
              <label className="form-label h4">Sök Produkt!</label>
              <input
>>>>>>> 4d842f6a2f49850d06f5e5c79a470194ffe0e5e3
                type="text"
                className="form-control"
                placeholder="sök här..."
                value={filter}
                onChange={searchText.bind(this)}
<<<<<<< HEAD
            />
            </div>
        </div>

        {dataSearch.map((item, index) => {
            return (
            <div className="mt-3 shadow row">
                <img src={item.img} className="col-md-2 m-1 img-thumbnail" />
                <div className="col-md-2 m-1 card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="card-price">{item.pris} </p>
                </div>
            </div>
            );
            })}
        </div>
        </section>
    </>
    );
};

export default Search;
=======
              />
            </div>
          </div>

          {dataSearch.map((item, idex) => {
            return (
              <div className="mt-3 shadow row">
                <img src={item.img} className="col-md-2 m-1 img-thumbnail" />
                <div className="col-md-2 m-1 card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                  <p className="card-price">{item.pris} </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Search;
>>>>>>> 4d842f6a2f49850d06f5e5c79a470194ffe0e5e3
