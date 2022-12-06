import React, { Component, useState } from "react";
import {useParams} from "react-router-dom";
import { data } from '../../data.js'
import ModalImage from "react-modal-image";
import '../../index.css'


function RetriveData(){
    let { sku } = useParams()

    let product;
    for (let i = 0; i < data.length; i++) {
        if(data[i].sku==sku){
            product=data[i]
        }
    }
    return product;

}

function Product(){
    
    let productInfo = RetriveData();
    const [startImage, setImage] = useState(productInfo.image[0]);
    return(
        <React.Fragment>
            <div className="w-screen md:flex md:w-2/3">
                <div className="w-full">
                    <a className="hover:cursor-pointer">
                        <ModalImage
                        className="w-4/5 h-4/5 md:w-3/4 md:h-3/4 m-auto mt-16 md:mt-8"
                        small={startImage}
                        large={startImage}
                        hideDownload
                        />
                    </a>
                    <div className="grid grid-cols-4 gap-y-8 mt-4 w-full mx-4">
                        {productInfo.image.map((img)=>(
                            <a className="hover:opacity-50 h-16 w-16 hover:cursor-pointer" onClick={()=> setImage(img)}><img src={img}></img></a>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-16 md:mt-8">
                    <div className="border-b-2">
                        <div className="text-black text-xl my-3 font-medium mx-4">
                            {productInfo.title.toUpperCase()}
                        </div>
                        <div className="text-gray-500 my-3 mx-4">
                            Codice : {productInfo.sku}
                        </div>
                        <div className="text-black text-2xl my-3 mx-4">
                            € {productInfo.price}
                        </div>
                        <div className="text-gray-500 mb-4 mx-4">
                            Imposte incluse.
                        </div>
                    </div>
                    <p className="text-gray-500 mt-4 mx-4 justify-self-auto preformatted">
                        {productInfo.description}
                    </p>

                </div>
            </div>
            <div className="w-screen flex md:w-2/3">
                <div className="my-12 mx-4">
                    <div className="text-2xl underline">
                        PAGAMENTO DISPONIBILE SOLO CON BONIFICO BANCARIO PER QUESTO ARTICOLO.
                    </div>
                    <div className="text-lg text-gray-600 my-8">
                    Il pagamento con bonifico bancario è effettuabile utilizzando i seguenti estremi: <br/><br/>
                    <ul>
                        <li>IBAN: IT87O0523271131000020158010</li>
                        <li>Intestazione: Wing Tsun Shop di Taliani Niccolò</li>
                    </ul>
                    <br/>
                    Per poter effettuare l'ordine di questo articolo mandare una mail a <a href="mailto:info@dojobrand.com" className="underline">info@dojobrand.com</a>, specificando Nome, Cognome, codice dell'articolo, quantità e (in allegato) la ricevuta del bonifico.<br/>
                    Al ricevimento dell'accredito l'ordine sarà gestito.
                    </div>
                </div>
            </div>
            
            
        </React.Fragment>
    );
}

export default Product;