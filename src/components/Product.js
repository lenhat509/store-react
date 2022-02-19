import React, {ReactDOM} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Product = (props) => {
    const {id} = props;
    const detail = useSelector(state => selectProductDetail(state.users, state.products, id))
    const productInCart = useSelector(state => {
            if(state.token.user)
                {
                    const products = Object.values(state.cart)[0];
                    return products.map(product => product.product_id);
                }
            return [];
        })
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${id}`)
    }
  
    return (
        <div className='card-detail'>
            <div className='text-3xl mb-2'>{detail.name}</div>
            <div className='text-sm text-violet-400'>{'Seller: ' + detail.username}</div>
            <div className='text-sm text-violet-500'>{'Price: '+ detail.price}</div>
            {productInCart.includes(id) && 
                <button className='update-btn mt-2' onClick={handleNavigate}>Update Cart</button>
            }
            {!productInCart.includes(id) && 
                <button className='product-form-submit mt-2' onClick={handleNavigate}>Buy</button>
            }
            
        </div>
    )
}

const selectProductDetail = (users, products, id) =>{
    const product = products.filter(product => product.id === id)[0];
    return ({
            ...product,
            username: users[product.user_id].firstname + ' ' + users[product.user_id].lastname
        }
    )
}

export default Product;