import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { handleAddProductToCart } from '../actions/cart';
import { useNavigate } from 'react-router-dom';

const ProductDetail = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const productDetail = useSelector((state) => selectProductDetail(state, parseInt(id)));
    const validateForm = (e) => {
        setQuantity(() => {
            const quantity = parseInt(e.target.value? e.target.value : 1);
            if(quantity > 20)
                return 20;
            return quantity;
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddProductToCart(parseInt(id), quantity));
        navigate('/cart', { replace : true })
        
    }
    return (
        <form className='card-detail' onSubmit={handleSubmit}>
            <div className='text-3xl mb-2'>{productDetail.name}</div>
            <div className='text-sm text-violet-400'>{'Seller: ' + productDetail.username}</div>
            <div className='text-sm text-violet-500'>{'Price: '+ productDetail.price}</div>
            <div className='flex flex-row justity-start items-center'> 
                <span className='text-sm text-violet-500'>{'Quantity: '}</span>
                <input className='bg-violet-300 rounded-md outline-none text-center w-1/3' type='number' onChange={validateForm} value={quantity} min={1} max={20} step={1}/>
            </div>
            <button className='product-form-submit mt-2' >Add to Cart</button>
        </form>
    )
}

const selectProductDetail = ({products, users}, id) => {
    const product = products.filter(product => product.id === id)[0];
    return {
            ...product,
            username: users[product.user_id].firstname + ' ' + users[product.user_id].lastname
    }
}

export default ProductDetail;

