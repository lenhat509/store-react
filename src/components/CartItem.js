import { useDispatch } from "react-redux";
import { handleDeleteProductFromCart } from "../actions/cart";
import { isLoading, stopLoading } from "../actions/loading";
import { useNavigate } from "react-router";

const CartItem = (props) => {
    const {product_id, name, quantity, price, seller} = props.item;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRemove = async (e) => {
        dispatch(isLoading());
        await dispatch(handleDeleteProductFromCart(product_id));
        dispatch(stopLoading());
    }
    const handleUpdate = () => {
        navigate(`/product/${product_id}`);
    }
    return (
        <div className='card-detail'>
            <div className='text-3xl mb-2'>{name}</div>
            <div className='text-sm text-violet-400'>{'Seller: ' + seller}</div>
            <div className='text-sm text-violet-500'>{'Price: '+ price}</div>
            <span className='text-sm text-violet-500'>{'Quantity: ' + quantity}</span>
            <div className='flex flex-row justify-end'>
                <button className='update-btn' type='submit' onClick={handleUpdate}>Update</button>
                <button className='remove-btn' type='submit' onClick={handleRemove}>Remove</button>
            </div>

        </div>
    )
}


export default CartItem;