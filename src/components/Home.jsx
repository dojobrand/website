import React, { Component } from "react";
import ProductIcon from "./product-icon/ProductIcon";
import { useParams } from "react-router-dom";
import {data} from '../data.js'

function RetriveData(){
    let { tag } = useParams()

    let product = [];
    for (let i = 0; i < data.length; i++) {
        for(let j=0; j < data[i].tag.length; j++){
            if(data[i].tag[j]===tag){
                product.push(data[i])
            }
        }
    }
    return product;

}

function Home(){
    let productInfo = RetriveData();

    return(
        <div className="">
            <div class="grid grid-cols-2 md:grid-cols-4">
                {productInfo.map((product)=>(
                    <ProductIcon sku={product.sku} title={product.title} image={product.image[0]} price={product.price} />
                ))}
            </div>
        </div>
    ); 
}
export default Home;
