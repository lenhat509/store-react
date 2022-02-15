import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProductDetail = (props) => {
    const { id } = useParams();
    const productDetail = useSelector((state) => selectProductDetail(state, parseInt(id)));
    
    return(
        <form className='card-detail'>
            <div className='text-3xl mb-2'>{productDetail.name}</div>
            <div className='text-sm text-violet-400'>{'Seller: ' + productDetail.username}</div>
            <div className='text-sm text-violet-500'>{'Price: '+ productDetail.price}</div>
            <div className='flex flex-row justity-start items-center'> 
                <span className='text-sm text-violet-500'>{'Quantity: '}</span>
                <input className='bg-violet-300 rounded-md outline-none text-center w-1/3' type='number' min='1' max='50' step='1'/>
            </div>
            <button className='product-form-submit mt-2' type='submit'>Add to Cart</button>
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

