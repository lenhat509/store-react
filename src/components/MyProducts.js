import { useSelector } from 'react-redux'
import { token } from '../actions'

const payload = JSON.parse(window.atob(token.split('.')[1]))

const MyProducts = (props) => {
    const products = useSelector((state) => selectProductsOfUser(state, payload.id));
    return (
        <div>
            {products.map(product => (
            <div key={product.id} className='card-detail mb-2'>
                <div className='text-3xl mb-2'>{product.name}</div>
                <div className='text-sm text-violet-500'>{'Price: '+ product.price +'$'}</div>
            </div>
            ))}
        </div>
        
    )
}

const selectProductsOfUser = (state, user_id) => {
    const { products } = state;
    return products.filter(product => product.user_id === user_id)
}

export default MyProducts;