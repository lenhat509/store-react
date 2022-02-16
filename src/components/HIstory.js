import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import CompleteOrder from "./CompleteOrder";

const selectCompleteOrder = createSelector(
    state => state.orders,
    state => state.products,
    state => state.users,
    (orders, products, users) => {
        const orderIds =  Object.keys(orders);
        const history = {}
        orderIds.forEach(orderId => {
            const order = orders[orderId];
            const newOrder = {};
            const productIds = Object.keys(order);
            productIds.forEach(productId => {
                const productDetail = products.filter(product => product.id === parseInt(productId))[0];
                const user = users[productDetail.user_id];
                const username = user.firstname + " " + user.lastname;
                newOrder[productId] = {
                    name: productDetail.name,
                    price: productDetail.price,
                    quantity: order[productId],
                    seller: username,
                    user_id: productDetail.user_id
                }
            })
            history[orderId] = newOrder;
        }) 
        return history;
    }
);

const History = (props) => {
    const history = useSelector(selectCompleteOrder);
    return (
        <div>
            {Object.keys(history).map(id => (   
                    <CompleteOrder key={id} order={history[id]} id={id}/> 
            ))}
        </div>
        
    )
}

export default History;