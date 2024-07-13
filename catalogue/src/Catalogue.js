import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const Catalogue = () => {
    return(
        <React.Fragment>
            <br />
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={`product/:productId`} element={<Details/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default Catalogue;
