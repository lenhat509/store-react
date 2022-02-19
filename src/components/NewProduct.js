import React, {ReactDOM, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { isLoading, stopLoading } from "../actions/loading";
import { createProduct } from "../actions/products";

const NewProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        price: "",
        formValid: false
    });

    const handleNameChange = (e) => {
        const name = e.target.value.trim();
        setForm(form => ({
            name: name,
            price: form.price,
            formValid: name.length > 2 && form.price > 0 ? true : false
        }))
    }
    const handlePriceChange = (e) => {
        let price =  e.target.value;
        if(price < 1)
            price = 1;
        else if (price > 1000)
            price = 1000;
        setForm(form => ({
            name: form.name,
            price : price,
            formValid: form.name.length > 2 && price > 0? true : false
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(isLoading());
        await dispatch(createProduct({name: form.name, price: form.price}));
        dispatch(stopLoading());
        navigate('/home');
    }
    return (
        <form className='product-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Product Name' onChange={handleNameChange} value={form.name} className='product-form-item'/>
            <input type='number' placeholder='Price' onChange={handlePriceChange} value={form.price} className='product-form-item'/>
            <button type='submit' className='product-form-submit' disabled={!form.formValid}>Create</button>
        </form>
    )
}


export default NewProduct