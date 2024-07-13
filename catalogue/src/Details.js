import React from "react";
import {Link, useParams} from "react-router-dom";

const Details = () => {
    const {productId} = useParams()
    return(
        <div>
            {`More details page about product id: ${productId}`}
            <br/>
            <Link to="/shop"><b>Back to all products</b></Link>
        </div>
    )
}

export default Details;
