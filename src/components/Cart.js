import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleCompleteTheCart } from "../actions/cart";
import { isLoading, stopLoading } from "../actions/loading";
import CartItem from "./CartItem";

const Cart = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => mapProductsToUsers(Object.values(state.cart)[0], state.users))
    const handleCompleteCart = async () => {
        dispatch(isLoading())
        await dispatch(handleCompleteTheCart());
        dispatch(stopLoading());
        navigate('/history')

    }
    return (
        <div className='m-2'>
            {products?.map(item => (
                <CartItem item={item} key={item.product_id}/>
            ))}
            {products.length !== 0 &&
            <button className='place-order-btn' onClick={handleCompleteCart}>Place Your Order</button>
            }
        </div>
    )
}


const mapProductsToUsers = (products, users)  => {
    const newProducts = products?.map(product => {
        const user = users[product.user_id];
        const seller = user.firstname + ' ' + user.lastname;
        return {
            ...product,
            seller
        }
    })

    return newProducts;
}
export default Cart;
