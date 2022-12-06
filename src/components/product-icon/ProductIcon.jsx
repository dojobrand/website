import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Product from "../product/Product";

function ProductIcon(props){
        return(
            <div>
                <div class="bg-white-500 text-gray-100 m-4">
                    <Link to={`/product/${props.sku}`}><img className="h-40 w-40 md:h-60 md:w-60 hover:opacity-50 transition duration-300 ease-in-out" src={props.image} /></Link>
                    <div className="text-black w-40 text-sm md:text-lg md:w-60">{props.title.toUpperCase()}</div>
                    <div className="text-black">€ {props.price}</div>
                </div>
            </div>
        );

}
export default ProductIcon;