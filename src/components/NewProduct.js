import React, {ReactDOM} from "react";

class NewProduct extends React.Component {
    render() {
        return (
            <form className='product-form'>
                <input type='text' placeholder='Product Name' className='product-form-item'/>
                <input type='number' placeholder='Price' className='product-form-item'/>
                <button type='submit' className='product-form-submit'>Create</button>
            </form>
        )
    }
}

export default NewProduct