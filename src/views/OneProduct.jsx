import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OneProduct = props => {
    const [oneProduct, setOneProduct] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
        .then(res => setOneProduct(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="App">
            <div className="jumbotron">
                <h1> Your Product! </h1>
            </div>
            {
                oneProduct ? <>
                <h2> {oneProduct.title} </h2>
                <h4>Price: ${oneProduct.price}</h4>
                <p>Description: {oneProduct.description}</p>
                </> : ""
            }
        </div>
    )
}

export default OneProduct;