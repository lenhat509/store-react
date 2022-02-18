import React, {ReactDOM} from 'react';
import { useSelector } from 'react-redux';

const Product = (props) => {
    const {id} = props;
    const detail = useSelector(state => selectProductDetail(state.users, state.products, id))
    return (
        <div className='card-detail'>
            <div className='text-3xl mb-2'>{detail.name}</div>
            <div className='text-sm text-violet-400'>{'Seller: ' + detail.username}</div>
            <div className='text-sm text-violet-500'>{'Price: '+ detail.price}</div>
            <button className='product-form-submit mt-2' type='submit'>Buy</button>
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