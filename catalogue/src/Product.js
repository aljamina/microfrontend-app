import React from "react";
import './Product.scss'
import {useNavigate} from "react-router-dom";
import Paper from '@material-ui/core/Paper';

const Product = (props) => {
    let navigate = useNavigate();

    return(
        <Paper elevation={3} className="paper"  onClick={() => navigate(props.url)}>
            <img src={props.data.image} width="300"/>
            <div className="container">
                <h2>
                    {props.data.productName}
                </h2>
                <span>{props.data.cost}</span>
            </div>
        </Paper>
    )
}

export default Product;
