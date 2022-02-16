import React, {ReactDOM} from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {

    handleClick() {
        
    }
    render() {
        const {detail} = this.props;
        return (
            <div className='card-detail'>
                <div className='text-3xl mb-2'>{detail.name}</div>
                <div className='text-sm text-violet-400'>{'Seller: ' + detail.username}</div>
                <div className='text-sm text-violet-500'>{'Price: '+ detail.price}</div>
                <button className='product-form-submit mt-2' type='submit'>Buy</button>
            </div>
        )
    }
}

const mapStateToProps = ({users, products}, props) =>{
    const { id } = props;
    const product = products.filter(product => product.id === id)[0];
    return {
        detail : {
            ...product,
            username: users[product.user_id].firstname + ' ' + users[product.user_id].lastname
        }
    }
}

export default connect(mapStateToProps)(Product);