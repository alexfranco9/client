import React from 'react';

const Form = props => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit} className="container">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description " className="form-control" > </textarea>
            </div>
            <div>
                <input type="submit" value="Create" className="btn btn-secondary" />
            </div>
            <br/>
        </form>
    );
}

export default Form;