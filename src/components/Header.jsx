import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){

        return(
            <div className="w-full md:flex h-full md:w-2/3">
                <a className="md:w-1/2" href="https://www.dojobrand.com">
                    <img 
                    className="w-4/5 my-4 md:w-2/3 md:my-8"
                    src={"https://cdn.shopify.com/s/files/1/0600/0269/7394/files/logo_dojo_brand.png?v=1631523079"} />
                </a>
                <div className="my-4 text-center md:w-1/2 md:align-middle">
                    CLICCA <a className="underline" href="https://www.dojobrand.com">QUI</a> PER TORNARE SU dojobrand.com
                </div>
            </div>
        );
    }
}

export default Header;