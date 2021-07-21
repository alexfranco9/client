import React from 'react';


const Form = props => {
    const {handleSubmit, onChangeHandler, myForm, errors} = props;
    
    return(
        <form onSubmit={handleSubmit} className="container">
            <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label" >Title:</label>
                <div className="col-sm-10">
                <input type="text" name="title" className="form-control" onChange={onChangeHandler} value={myForm.title} />
                {
                    errors.title ? <span className="text-danger">{errors.title.message}</span> : ""
                }
            </div>
            </div>
            <div className="form-group row">
                <label htmlFor="price" className="col-sm-2 col-form-label" >Price:</label>
                <div className="col-sm-10">
                <input type="text" name="price" className="form-control" onChange={onChangeHandler} value={myForm.price} />
                {
                    errors.price ? <span className="text-danger">{errors.price.message}</span> : ""
                }
            </div>
            </div>
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-2 col-form-label" >Description:</label>
                <div className="col-sm-10">
                <textarea name="description" className="form-control" onChange={onChangeHandler} value={myForm.description}>{myForm.description}</textarea>
                {
                    errors.description ? <span className="text-danger">{errors.description.message}</span> : ""
                }
            </div>
            </div>
            <div>
                <input type="submit" value="Create" className="btn btn-secondary" />
            </div>
            <br/>
        </form>
    );
}

export default Form;



