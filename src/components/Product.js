import React, {ReactDOM} from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {

    handleClick() {
        
    }
    render() {
        const {detail} = this.props;
        return (
           <div className='grid md:grid-cols-5 md:grid-rows-3 grid-rows-4 h-20'>
               <div className='flex justify-center items-center md:row-start-1 md:row-end-4 bg-indigo-200 md:rounded-l-md '>
                    <span>{detail.username}</span>
                </div>
                <div className='flex justify-center items-center md:col-start-2 md:col-end-6 bg-indigo-400 text-indigo-900 md:rounded-tr-md'>
                    <span>{detail.name}</span>
                </div>
                <div className='flex justify-center items-center md:col-start-2 md:col-end-6 bg-indigo-300 text-purple-600 '>
                    <span>{detail.price + ' $'}</span>
                </div> 
                <button onClick={this.handleClick} className='flex justify-center items-center md:col-start-2 md:col-end-6 bg-red-200 text-red-800 md:rounded-br-md hover:bg-amber-200 hover:text-red-600'>
                    <span> Buy </span>
                </button>
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