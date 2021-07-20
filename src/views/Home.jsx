import React, { useEffect, useState } from 'react';
import AllProducts from '../components/AllProducts';
import Form from '../components/Form';
import axios from 'axios';

const Home = props => {
    const [myProducts, setMyProducts] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setMyProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h1> Product Manager </h1>
            <Form/>
            <h2> All Products: </h2>
            {
                myProducts ?
                myProducts.map((product, i) => {
                    return <AllProducts product={product}/>
                })
                : ""
            }
        </div>
    )
}
export default Home;