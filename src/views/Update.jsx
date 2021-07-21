import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const Update = props => {
    const [myForm, setMyForm] = useState({});
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setMyForm(res.data))
            .catch(err => console.log(err))
    }, [])
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/update/${props._id}`, myForm)
        .then(res => {
            if(res.data.err) {
                console.log("There were errors!");
                setErrors(res.data.err.errors)
            } else {
                console.log("It worked!")
                navigate("/");
            }
        })
        .catch(err => console.log("Something went wrong!", err))
}
    


    return(
        <div className="App">
            <h1 className="jumbotron"> Edit Product. </h1>
            <Form handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors} />
        </div>
    )
}

export default Update;