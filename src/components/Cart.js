import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
    const products = useSelector((state) => mapProductsToUsers(Object.values(state.cart)[0], state.users))
    return (
        <div>
            {products?.map(item => (
                <CartItem item={item} key={item.product_id}/>
            ))}
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
