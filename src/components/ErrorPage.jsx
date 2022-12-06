import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function ErrorPage(){
    return(
        <div className="m-12">
            <Link to="/list-complete" className="underline">Lista completa articoli</Link><br/><br/>
            <Link to="/butterfly-knives" className="underline">Butterfly Knives</Link><br/><br/>
            <Link to="/bastoni-telescopici" className="underline">Bastoni Telescopici</Link><br/><br/>
            <Link to="/sai" className="underline">Sai</Link><br/><br/>
            <Link to="/spade" className="underline">Spade</Link><br/><br/>
            <Link to="/nunchaku" className="underline">Nunchaku</Link><br/><br/>
            <Link to="/difesa-personale" className="underline">Difesa Personale</Link><br/><br/>
        </div>
    );
}
export default ErrorPage;