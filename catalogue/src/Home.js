import React from "react";
import Product from "./Product";
import {articles} from "./allArticles";

const getUrl = (id) => {
    if (window.location.href.indexOf("shop") > -1) return `product/${id}`
    return `shop/product/${id}`
}

const Home = () => {
    return articles.map(item => <Product key={item.id} data={item} url={getUrl(item.id)}/>);
}

export default Home;
