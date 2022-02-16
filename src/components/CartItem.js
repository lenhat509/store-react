import { useDispatch } from "react-redux";

const CartItem = (props) => {
    const {product_id, name, quantity, price, seller} = props.item;
    return (
        <div className='card-detail'>
            <div className='text-3xl mb-2'>{name}</div>
            <div className='text-sm text-violet-400'>{'Seller: ' + seller}</div>
            <div className='text-sm text-violet-500'>{'Price: '+ price}</div>
            <span className='text-sm text-violet-500'>{'Quantity: ' + quantity}</span>
            <div className='flex flex-row justify-end'>
                <button className='update-btn' type='submit'>Update</button>
                <button className='remove-btn' type='submit'>Remove</button>
            </div>

        </div>
    )
}


export default CartItem;