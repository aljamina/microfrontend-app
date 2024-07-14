import React from "react";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Product from "./Product";
import {articles} from "./allArticles";

const getUrl = (id) => {
    if (window.location.href.indexOf("shop") > -1) return `product/${id}`
    return `shop/product/${id}`
}

const generateClassName = createGenerateClassName({
    seed:'catalogue'
});

const Home = () => {
    return(
        <StylesProvider generateClassName={generateClassName}>
            {articles.map(item => <Product key={item.id} data={item} url={getUrl(item.id)}/>)}
        </StylesProvider>
    )
}

export default Home;
