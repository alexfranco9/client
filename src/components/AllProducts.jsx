import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = props => {
    const deleteProduct = _id => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }
    return (
        <p>
            <Link to={`/product/${props.product._id}`}>{props.product.title}</Link>
            <button className="ml-2" onClick={() => deleteProduct(props.product._id)}>Delete</button>
            <Link to={`/product/update/${props.product._id}`}><button className="ml-2">Edit</button></Link>
        </p>
    )
}

export default AllProducts;
