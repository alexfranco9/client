import React, { useEffect, useState } from 'react';
import AllProducts from '../components/AllProducts';
import Form from '../components/Form';
import axios from 'axios';

const Home = props => {
    const [myProducts, setMyProducts] = useState(null);
    const [reloadAPI, setReloadAPI] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setMyProducts(res.data))
            .catch(err => console.log(err))
    }, [reloadAPI])
    const update = () => {
        setReloadAPI(!reloadAPI);
    }
    

    const [myForm, setMyForm] = useState({
        title: "",
        price: "",
        description: ""
    })

    const [errors, setErrors] = useState({});
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products/create", myForm)
        .then(res => {
            if(res.data.err) {
                console.log("There were errors!");
                setErrors(res.data.err.errors)
            } else {
                console.log("It worked!")
                setReloadAPI(!reloadAPI);
                setMyForm({
                    title: "",
                    price: "",
                    description: ""
                })
                
            }
        })
        .catch(err => console.log("Something went wrong!", err))
}

return(
    <>
        <div className="App">
            <h1 className="jumbotron"> Product Manager </h1>
            <Form setReloadAPI={setReloadAPI} handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors} />
        </div>
        <hr/>
        <div className="container-sm">
            <h2> All Products: </h2>
            {
                myProducts ?
                myProducts.map((product, i) => {
                    return <AllProducts product={product} update={update} />
                })
                : ""
            }
        </div>
    </>
)
}

export default Home;

