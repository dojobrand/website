import React, { Component } from "react";
import ProductIcon from "./product-icon/ProductIcon";
import {data} from '../data.js'


function ListComplete(){
    return(
        <div className="">
            <div class="grid grid-cols-2 md:grid-cols-4">
                {data.map((product)=>(
                    <ProductIcon sku={product.sku} title={product.title} image={product.image[0]} price={product.price} />
                ))}
            </div>
        </div>
    ); 
}
export default ListComplete;

/*
butterfly knives (butterfly-knives)             TUTTO CARICATO
bastoni telescopici (bastoni-telescopici)       TUTTO CARICATO
sai (sai)                                       TUTTO CARICATO
spade (spade)                                   TUTTO CARICATO
nunchaku (nunchaku)                             TUTTO CARICATO
difesa personale (difesa-personale)             TUTTO CARICATO
*/