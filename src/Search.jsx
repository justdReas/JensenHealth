import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Search () {
    return (
        <>
        
        <h1 className = "text-center text-info">Sök Produkt!</h1>

        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Produkter Namn</h5>
                        <p className="card-text">Produkter Beskrivning </p>
                        <p className="card-price">Produkter Pris </p>
                    </div>

                </div>
            </div>

        </section>

        </>


    )
}

export default Search;